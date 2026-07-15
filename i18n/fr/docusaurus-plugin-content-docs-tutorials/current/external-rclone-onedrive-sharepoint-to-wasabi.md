---
sidebar_position: 12
description: "Déplacez des fichiers de OneDrive vers Wasabi à haute vitesse en exécutant un démon Rclone externe et en le contrôlant avec RcloneView."
keywords:
  - rcloneview
  - rclone
  - external rclone
  - onedrive
  - wasabi
  - s3 compatible
  - cloud migration
  - cloud sync
  - cloud transfer
tags:
  - RcloneView
  - cloud-file-transfer
  - cloud-migration
  - Tutorial
  - onedrive
  - wasabi
date: 2025-07-15
author: Jay
---
import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';

# Déplacer OneDrive vers Wasabi via Rclone externe

Lorsque les jeux de données Microsoft 365 sont volumineux, les déplacer via un ordinateur portable peut être lent et peu fiable. Exécuter **Rclone** sur une VM cloud (EC2, GCE ou tout hôte Linux) et le piloter depuis **RcloneView** permet de garder le trafic dans le centre de données, d'éviter les goulots d'étranglement du réseau domestique, et de rendre possible une authentification sans navigateur.

Vous allez :

1. Exécuter **rclone rcd** sur un serveur distant en tant que moteur externe.
2. Ouvrir une **nouvelle fenêtre RcloneView** qui se connecte à ce Rclone externe.
3. Ajouter des remotes **OneDrive** et **Wasabi** (y compris les méthodes d'authentification headless/CLI uniquement).
4. Copier, synchroniser ou planifier des tâches de OneDrive vers Wasabi sans utiliser la bande passante locale.

## Partie 1. Déployer Rclone sur un serveur (Rclone externe)

1. Lancez une petite VM Linux (par exemple, `t3.medium` sur AWS ou équivalent).  
2. Ouvrez le port TCP **5572** vers votre IP ou passez par un tunnel SSH.  
3. Installez Rclone :
```bash
curl https://rclone.org/install.sh | sudo bash
```
4. Démarrez le démon de contrôle distant avec authentification :
```bash
rclone rcd --rc-addr=0.0.0.0:5572 --rc-user=admin --rc-pass=admin --log-level INFO
```
5. Depuis votre ordinateur portable, vérifiez qu'il est accessible :
```bash
curl -u admin:admin -X POST "http://<SERVER-IP>:5572/rc/noop"
```
   Une réponse `{}` signifie que le démon est prêt pour RcloneView.

👉 Besoin d'un rappel ? Consultez [Exécuter Rclone sur AWS EC2](/howto/cloud-storage-setting/run-rclone-on-aws-ec2).

## Partie 2. Ouvrir une nouvelle fenêtre RcloneView

Chaque fenêtre RcloneView peut être associée à une instance Rclone différente.

1. Lancez **RcloneView**.  
2. Cliquez sur **`New Window`** dans le menu **Home**.  
3. Une deuxième fenêtre s'ouvre ; celle-ci se connectera au Rclone externe que vous venez de lancer.

👉 Pour en savoir plus : [Utiliser plusieurs connexions Rclone avec New Window](/howto/rcloneview-advanced/multi-window).

## Partie 3. Connecter RcloneView au Rclone externe

Dans la nouvelle fenêtre :

1. Ouvrez **Settings -> Connection Manager** -> **New Connection**.  
2. Remplissez :

| Champ          | Valeur                              |
| -------------- | ---------------------------------- |
| Display Name   | `external-rclone`                  |
| Remote Address | `http://<SERVER-IP>:5572`          |
| Username       | `admin`                            |
| Password       | `admin`                            |

3. Cliquez sur **Test Connection** -> **Save** -> **Connect**. La barre d'état devrait indiquer que vous êtes connecté au démon externe.

## Partie 4. Ajouter les remotes Wasabi et OneDrive (dans le Rclone externe)

Tous les remotes que vous créez maintenant vivent dans le processus Rclone externe et sont partagés par la fenêtre RcloneView connectée.

### ➕ Ajouter Wasabi (compatible S3)

1. Allez dans l'onglet **Remote** -> **`+ New Remote`**.  
2. Choisissez **S3 / Wasabi**.  
3. Saisissez l'**Access Key**, la **Secret Key** et l'**endpoint** de votre région (par exemple `s3.ap-northeast-2.wasabisys.com`).  
4. Enregistrez le remote (par exemple, nommez-le `wasabi-prod`).

👉 Détails : [Comment ajouter un remote Wasabi](/tutorials/#2-add-wasabi-as-a-remote-in-rcloneview).

### ➕ Ajouter OneDrive (fonctionne sans navigateur local)

1. Cliquez à nouveau sur **`+ New Remote`** et sélectionnez **OneDrive**.  
2. Si le serveur dispose d'un navigateur, effectuez le flux OAuth standard dans RcloneView.  
3. Si le serveur est headless ou ne peut pas ouvrir de navigateur, suivez la méthode headless/CLI : générez le token sur un appareil disposant d'un navigateur et collez-le dans la configuration côté serveur.  

👉 Flux headless détaillé : [Ajouter des remotes Microsoft depuis EC2/headless](/howto/remote-storage-connection-settings/ec2-onedrive-headless).
Après l'enregistrement, vous devriez voir deux remotes listés dans l'Explorer : **OneDrive** et **Wasabi**.

## Partie 5. Transférer ou synchroniser vers Wasabi

### Méthode A : Copie/synchronisation ponctuelle

1. Dans l'Explorer, ouvrez **OneDrive** d'un côté et **Wasabi** de l'autre.  
2. Sélectionnez le dossier source sur OneDrive et le bucket/dossier de destination sur Wasabi.  
3. Cliquez sur **`Sync`** (fait correspondre la destination à la source) ou utilisez **Copy ->** pour une copie simple.  
4. Exécutez éventuellement **Dry Run** d'abord, puis **Run** pour démarrer. La progression apparaît dans l'onglet **Transfer**.

### Méthode B : Enregistrer ou planifier des tâches

1. Configurez une copie/synchronisation comme ci-dessus, puis choisissez **Save to Jobs** dans la boîte de dialogue.  
2. Ouvrez **Job Manager** pour relancer la tâche enregistrée à tout moment.  
3. Pour automatiser, activez **Schedule** dans Job Manager (fonctionnalité PLUS) et définissez la cadence souhaitée.  
4. Consultez **Job History** pour les journaux et résultats.

👉 En savoir plus sur les tâches et la planification :  
- [Créer des tâches de synchronisation](/howto/rcloneview-basic/create-sync-jobs)  
- [Exécuter et gérer les tâches](/howto/rcloneview-basic/execute-manage-job)  
- [Planification et exécution des tâches](/howto/rcloneview-advanced/job-scheduling-and-execution)

## Conseils rapides pour des envois plus rapides vers Wasabi

- Gardez la VM externe dans la même région que Wasabi lorsque c'est possible pour réduire la latence.  
- Pour les objets volumineux, des valeurs plus élevées de `--transfers` et `--s3-upload-concurrency` peuvent améliorer le débit ; ajustez progressivement en fonction du CPU et du réseau.  
- Utilisez **Dry Run** avant les synchronisations destructrices pour confirmer ce qui va changer.

## ✅ Conclusion

En hébergeant Rclone comme démon distant et en le pilotant depuis une fenêtre RcloneView dédiée, vous obtenez des migrations fiables de OneDrive vers Wasabi sans goulots d'étranglement locaux. Les flux d'authentification headless vous couvrent lorsqu'aucun navigateur n'est disponible, et les tâches/planifications rendent les exécutions répétées sans effort.

## 🔗 Guides associés

- **Authentification et remotes**  
  - [Ajouter des remotes Microsoft depuis EC2/headless](https://rcloneview.com/support/howto/remote-storage-connection-settings/ec2-onedrive-headless)  
  - [Comment ajouter un remote compatible S3](/howto/remote-storage-connection-settings/s3)  
- **Rclone externe et fenêtres**  
  - [Utiliser plusieurs connexions Rclone avec New Window](/howto/rcloneview-advanced/multi-window)  
  - [Exécuter Rclone sur AWS EC2](/howto/cloud-storage-setting/run-rclone-on-aws-ec2)  
- **Transferts et automatisation**  
  - [Synchroniser des stockages distants](/howto/rcloneview-basic/synchronize-remote-storages)  
  - [Créer des tâches de synchronisation](/howto/rcloneview-basic/create-sync-jobs)  
  - [Planification et exécution des tâches](/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
