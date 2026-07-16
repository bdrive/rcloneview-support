---
slug: fix-proxy-vpn-cloud-connection-issues-rcloneview
title: "Résoudre les problèmes de connexion cloud liés au proxy et au VPN dans RcloneView"
authors:
  - tayson
description: "Résolvez les échecs de synchronisation et de transfert cloud dans RcloneView derrière des proxys d'entreprise ou des VPN. Couvre les paramètres HTTP_PROXY, les erreurs de certificat SSL, le split tunneling, les problèmes de résolution DNS et les techniques de contournement de pare-feu."
keywords:
  - rclone proxy settings
  - rclone VPN connection error
  - rclone corporate proxy fix
  - rclone SSL certificate error
  - rclone HTTPS_PROXY config
  - rclone DNS resolution failure
  - rclone firewall blocked
  - rcloneview proxy configuration
  - rclone split tunneling VPN
  - fix rclone connection behind proxy
tags:
  - troubleshooting
  - tips
  - security
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Résoudre les problèmes de connexion cloud liés au proxy et au VPN dans RcloneView

> Les proxys d'entreprise et les VPN interrompent fréquemment les connexions de synchronisation cloud avec des erreurs cryptiques de délai d'attente et de certificat. Ce guide couvre chaque scénario courant et explique comment configurer RcloneView pour qu'il fonctionne de manière fiable derrière des restrictions réseau.

De nombreuses organisations font transiter le trafic Internet par des serveurs proxy ou exigent une connexion VPN pour les travailleurs à distance. Bien que ces mesures améliorent la sécurité, elles interfèrent souvent avec les appels API de stockage cloud. Rclone et RcloneView ont besoin d'un accès HTTPS direct aux points de terminaison des fournisseurs cloud, et tout ce qui se trouve entre votre machine et ces points de terminaison — proxys, pare-feu, tunnels VPN ou appliances d'inspection SSL — peut provoquer des échecs de connexion. Les erreurs vont des délais d'attente et échecs DNS aux erreurs de négociation TLS et aux rejets de certificat. Ce guide passe en revue chaque problème et propose des solutions concrètes.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Configurer les variables d'environnement HTTP_PROXY et HTTPS_PROXY

Rclone respecte les variables d'environnement de proxy HTTP standard utilisées par la plupart des outils réseau. Si votre organisation exige un proxy pour l'accès à Internet, vous devez définir ces variables afin que rclone sache où acheminer son trafic.

### Définir les variables de proxy

**Windows (variables d'environnement système) :**

1. Ouvrez **Paramètres > Système > À propos > Paramètres système avancés > Variables d'environnement**.
2. Sous Variables système (ou Variables utilisateur), ajoutez :
   - `HTTP_PROXY` = `http://proxy.company.com:8080`
   - `HTTPS_PROXY` = `http://proxy.company.com:8080`
   - `NO_PROXY` = `localhost,127.0.0.1,.internal.company.com`
3. Redémarrez RcloneView pour prendre en compte les nouvelles variables.

**macOS / Linux (profil shell) :**

Ajoutez à `~/.bashrc`, `~/.zshrc`, ou `/etc/environment` :

```bash
export HTTP_PROXY="http://proxy.company.com:8080"
export HTTPS_PROXY="http://proxy.company.com:8080"
export NO_PROXY="localhost,127.0.0.1,.internal.company.com"
```

Rechargez le fichier ou redémarrez votre session de terminal.

### Proxys authentifiés

Si votre proxy exige un nom d'utilisateur et un mot de passe, incluez les identifiants dans l'URL :

```
http://username:password@proxy.company.com:8080
```

Les caractères spéciaux du mot de passe doivent être encodés en URL (par exemple, `@` devient `%40`, `#` devient `%23`).

### Proxys SOCKS5

Pour les proxys SOCKS5 (courants avec les tunnels SSH), utilisez :

```
socks5://proxy.company.com:1080
```

Définissez ceci à la fois pour `HTTP_PROXY` et `HTTPS_PROXY`.

### Vérifier la configuration du proxy

Testez que rclone peut atteindre un fournisseur cloud via le proxy :

```bash
rclone lsd remote: --dump headers -v
```

Si la connexion réussit, vous verrez le listage du répertoire. L'option `--dump headers` affiche les en-têtes HTTP, ce qui peut confirmer que le proxy est bien utilisé.

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />

## Résoudre les erreurs de certificat SSL

Les erreurs de certificat SSL/TLS sont le problème le plus courant derrière les proxys d'entreprise. De nombreuses organisations utilisent l'inspection SSL (aussi appelée interception HTTPS ou inspection de type man-in-the-middle), où le proxy déchiffre puis rechiffre le trafic HTTPS à l'aide de sa propre autorité de certification (CA). Rclone ne fait pas confiance à cette CA par défaut, ce qui provoque des erreurs telles que :

- `x509: certificate signed by unknown authority`
- `TLS handshake timeout`
- `SSL certificate problem: unable to get local issuer certificate`

### Solution : ajouter le certificat CA d'entreprise

1. **Obtenez le certificat CA racine d'entreprise** auprès de votre service informatique. Il s'agit généralement d'un fichier `.pem` ou `.crt`.
2. **Indiquez à rclone de lui faire confiance** à l'aide de l'option `--ca-cert` :
   ```bash
   rclone lsd remote: --ca-cert /path/to/corporate-ca.pem
   ```
3. **Rendez cela permanent** en le définissant dans l'environnement de configuration de rclone. Ajoutez à votre profil shell :
   ```bash
   export RCLONE_CA_CERT="/path/to/corporate-ca.pem"
   ```
4. Dans RcloneView, ajoutez `--ca-cert /path/to/corporate-ca.pem` comme option personnalisée dans la configuration de votre remote ou de votre tâche.

### Solution : ajouter la CA au magasin de confiance du système

Vous pouvez également ajouter la CA d'entreprise au magasin de confiance de votre système d'exploitation afin que toutes les applications (y compris rclone) lui fassent confiance automatiquement :

**Windows :**
```
certutil -addstore "Root" corporate-ca.crt
```

**macOS :**
```bash
sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain corporate-ca.crt
```

**Linux (Debian/Ubuntu) :**
```bash
sudo cp corporate-ca.crt /usr/local/share/ca-certificates/
sudo update-ca-certificates
```

### Dernier recours : désactiver la vérification SSL

Si vous ne parvenez pas à obtenir le certificat CA d'entreprise, vous pouvez désactiver entièrement la vérification SSL. Ceci n'est **pas recommandé** en production car cela supprime la protection contre de véritables attaques de type man-in-the-middle :

```bash
rclone lsd remote: --no-check-certificate
```

N'utilisez cela que pour tester et confirmer que le certificat est bien en cause, puis mettez en place une véritable solution avec certificat CA.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />

## Résoudre les problèmes DNS derrière un VPN

Les connexions VPN remplacent souvent les paramètres DNS de votre système, ce qui peut empêcher la résolution des domaines des fournisseurs cloud ou les faire résoudre vers des adresses incorrectes.

### Symptômes

- `dial tcp: lookup storage.googleapis.com: no such host`
- `dial tcp: lookup graph.microsoft.com: i/o timeout`
- Des connexions qui fonctionnaient avant l'établissement du VPN échouent désormais.

### Solutions

**Vérifiez la résolution DNS :**

```bash
nslookup storage.googleapis.com
nslookup graph.microsoft.com
nslookup api.dropboxapi.com
```

Si ces commandes échouent ou renvoient des adresses IP inattendues lorsque le VPN est actif, le DNS est en cause.

**Utilisez un serveur DNS spécifique :**

Certains clients VPN permettent de configurer les paramètres DNS. Assurez-vous que votre VPN utilise des serveurs DNS capables de résoudre les domaines publics des fournisseurs cloud. Si votre VPN vous oblige à utiliser des serveurs DNS internes incapables de résoudre les domaines externes, demandez à votre équipe informatique d'ajouter des règles de redirection DNS pour les domaines des fournisseurs cloud.

**Contournement DNS manuel (temporaire) :**

Ajoutez les points de terminaison des fournisseurs cloud à votre fichier hosts comme solution temporaire :

- Windows : `C:\Windows\System32\drivers\etc\hosts`
- macOS/Linux : `/etc/hosts`

Cette méthode est fragile car les fournisseurs cloud font tourner leurs adresses IP, mais elle peut vous débloquer en attendant qu'une véritable solution DNS soit mise en place.

**Videz le cache DNS** après avoir effectué des modifications :

```bash
# Windows
ipconfig /flushdns

# macOS
sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder

# Linux
sudo systemd-resolve --flush-caches
```

## Configurer le split tunneling

Le split tunneling n'achemine que le trafic d'entreprise via le VPN tout en laissant le trafic de stockage cloud aller directement sur Internet. Cela permet d'éviter à la fois le proxy et le VPN pour les connexions aux fournisseurs cloud, résolvant souvent tous les problèmes d'un coup.

### Comment le configurer

Le split tunneling se configure généralement dans le client VPN ou par votre service informatique. Vous devez demander à ce que les domaines ou plages d'adresses IP suivants soient exclus du tunnel VPN :

**Google Drive / Google Cloud :**
- `*.googleapis.com`
- `*.google.com`
- `accounts.google.com`

**Microsoft OneDrive / SharePoint / Azure :**
- `*.sharepoint.com`
- `*.onedrive.com`
- `graph.microsoft.com`
- `login.microsoftonline.com`
- `*.blob.core.windows.net`

**Amazon S3 :**
- `*.amazonaws.com`
- `s3.*.amazonaws.com`

**Dropbox :**
- `*.dropbox.com`
- `*.dropboxapi.com`

**Autres fournisseurs :** consultez la documentation du fournisseur pour connaître les domaines des points de terminaison API.

Si votre service informatique ne peut pas configurer le split tunneling, les solutions liées au proxy et au certificat décrites ci-dessus restent vos meilleures alternatives.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="transfer monitoring" class="img-large img-center" />

## Contourner les pare-feu d'entreprise

Les pare-feu d'entreprise peuvent bloquer des ports, protocoles ou domaines spécifiques dont rclone a besoin. Problèmes courants liés au pare-feu :

### Ports bloqués

Rclone utilise HTTPS (port 443) pour la plupart des fournisseurs cloud. Si le port 443 est bloqué pour le trafic non-navigateur, les connexions rclone expireront. Vérifiez auprès de votre service informatique que le trafic HTTPS sortant est autorisé pour le processus rclone.

### Domaines bloqués

Certains pare-feu bloquent l'accès à des domaines de stockage cloud spécifiques. Si votre organisation ne prend pas officiellement en charge un fournisseur cloud particulier, ses points de terminaison API peuvent figurer sur une liste de blocage. Vous verrez des erreurs de délai d'attente ou des messages de connexion refusée. La seule solution est de demander à votre équipe informatique d'ajouter les domaines requis à la liste d'autorisation.

### Inspection approfondie des paquets

Certains pare-feu de nouvelle génération inspectent le trafic HTTPS au-delà du simple niveau du certificat. Ils peuvent bloquer les connexions qui ne ressemblent pas au trafic navigateur standard. L'en-tête User-Agent de rclone l'identifie comme étant rclone, ce que certaines règles DPI peuvent signaler. Vous pouvez définir un User-Agent personnalisé :

```bash
rclone lsd remote: --user-agent "Mozilla/5.0"
```

Il s'agit d'un contournement qui ne doit être utilisé que si sa nécessité est confirmée et approuvée par votre équipe informatique.

### Rafraîchissement des jetons OAuth via les proxys

Les fournisseurs cloud utilisant OAuth (Google Drive, OneDrive, Dropbox) rafraîchissent périodiquement les jetons d'accès. Si le point de terminaison de rafraîchissement du jeton est bloqué ou si le proxy interfère avec le flux OAuth, vous verrez des erreurs d'authentification même si vos identifiants sont corrects. Assurez-vous que les points de terminaison OAuth suivants sont accessibles :

- `oauth2.googleapis.com` (Google)
- `login.microsoftonline.com` (Microsoft)
- `api.dropbox.com/oauth2/token` (Dropbox)

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job in RcloneView" class="img-large img-center" />

## Diagnostiquer les délais d'attente de connexion

Lorsque les connexions expirent derrière un proxy ou un VPN, suivez ces étapes pour en cerner la cause :

1. **Testez la connectivité de base :**
   ```bash
   curl -v https://storage.googleapis.com
   ```
   Si curl fonctionne mais pas rclone, le problème vient probablement des variables d'environnement de proxy non prises en compte par rclone.

2. **Testez avec la journalisation détaillée :**
   ```bash
   rclone lsd remote: -vv --dump headers --dump auth
   ```
   Cela montre exactement ce que rclone envoie et reçoit.

3. **Vérifiez une éventuelle interférence du proxy :**
   ```bash
   rclone lsd remote: --no-check-certificate -vv
   ```
   Si cela fonctionne mais pas la commande normale, l'inspection SSL est en cause.

4. **Testez sans VPN** (si possible) pour confirmer que le VPN est impliqué.

5. **Augmentez les délais d'attente** pour les connexions proxy lentes :
   ```bash
   rclone lsd remote: --timeout 60s --contimeout 30s
   ```

6. **Consultez les journaux de RcloneView** dans l'historique des tâches pour obtenir des messages d'erreur détaillés.

## Configuration persistante dans RcloneView

Une fois que vous avez trouvé la bonne combinaison de paramètres de proxy, de chemins de certificat et d'options, enregistrez-la pour ne pas avoir à la redécouvrir :

- **Variables d'environnement** — définissez `HTTP_PROXY`, `HTTPS_PROXY` et `RCLONE_CA_CERT` dans votre profil système afin qu'elles s'appliquent à toutes les opérations rclone.
- **Options personnalisées dans les tâches** — dans la configuration des tâches de RcloneView, ajoutez des options telles que `--ca-cert`, `--timeout` ou `--contimeout` comme paramètres personnalisés.
- **Paramètres par remote** — certains paramètres peuvent être ajoutés directement à la configuration du remote dans `rclone.conf`.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Définissez les variables d'environnement de proxy** si votre réseau exige un proxy.
3. **Installez votre certificat CA d'entreprise** si l'inspection SSL est en place.
4. **Testez la connectivité** avec une simple commande `rclone lsd remote:` avant de configurer des tâches de synchronisation.
5. **Enregistrez les configurations fonctionnelles** en tant que tâches RcloneView pour des synchronisations cohérentes et reproductibles.

Les restrictions réseau n'ont pas à vous empêcher de gérer efficacement votre stockage cloud. Avec les bons paramètres de proxy et de certificat, RcloneView fonctionne de manière fiable même dans les environnements d'entreprise les plus verrouillés.

---

**Guides connexes :**

- [Ajouter un stockage distant](https://rcloneview.com/support/howto/#step-2-adding-remote-storage-google-drive-example)
- [Ajouter une connexion OAuth en ligne](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)
- [Exécuter et gérer les tâches](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job)

<CloudSupportGrid />
