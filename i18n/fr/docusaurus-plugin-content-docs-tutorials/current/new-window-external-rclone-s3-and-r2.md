---
sidebar_position: 11
description: "Découvrez comment transférer de grands fichiers d'AWS S3 vers Cloudflare R2 à haute vitesse à l'aide d'un daemon Rclone externe sur EC2, entièrement géré avec RcloneView."
keywords:
  - rcloneview
  - cloud
  - sync
  - rclone
  - aws
  - ec2
  - aws s3
  - external rclone
  - cloud to cloud transfer
  - cloud sync
  - Cloud Migration
  - cloud storage
  - cloud transfer
  - file synchronization
  - cloudflare r2
  - cloudflare s3 api
  - cloudflare r2 rclone
tags:
  - RcloneView
  - cloud-file-transfer
  - cloud-migration
  - Tutorial
  - cloud-to-cloud
  - aws-s3
  - cloudflare-r2
  - aws-ec2
date: 2025-07-13
author: Jay
---
import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';

# Transferts de fichiers hautes performances entre AWS S3 et Cloudflare R2 via Rclone externe sur EC2

Les équipes modernes jonglent souvent avec plusieurs plateformes de stockage d'objets et découvrent rapidement que la bande passante, la latence et les frais de sortie deviennent des obstacles critiques lorsque de grands jeux de données transitent par un poste de travail local. Exécuter **Rclone** directement sur une instance cloud — puis le piloter via **RcloneView** — envoie le trafic important dans le réseau backbone haute vitesse du cloud et garde votre ordinateur portable hors du chemin des données.

<img src="/support/images/en/tutorials/transfer-files-between-aws-s3-and-cloudflare-r2-with-external-rclone.png" alt="transfer files between aws s3 and cloudflare r2 with external rclone" class="img-medium img-center" />

Le tutoriel ci-dessous reprend la structure du guide « Sync AWS S3 and Google Drive via EC2 » et l'étend au scénario S3 ↔ R2. Vous allez :

1. Démarrer Rclone en tant que daemon de contrôle à distance (**rcd**) sur un serveur AWS EC2.
2. Ouvrir une fenêtre RcloneView distincte et vous connecter à ce Rclone externe.
3. Ajouter des remotes AWS S3 et Cloudflare R2 au sein du Rclone hébergé sur EC2.
4. Transférer, synchroniser ou planifier des tâches — entièrement de cloud à cloud — sans contrainte de bande passante locale.

:::danger Frais de transfert de données AWS
Le trafic intra-région au sein de la même zone de disponibilité est gratuit, mais le trafic inter-AZ et la sortie vers Internet entraînent des coûts (généralement 0,02 $/Go AZ à AZ ; 0,09 $/Go vers Internet).
Voir : [AWS Pricing – Data Transfer](https://aws.amazon.com/ec2/pricing/on-demand/#Data_Transfer)
:::

## **Pourquoi utiliser un Rclone externe ?**

| Rclone local intégré                                                                  | Rclone externe sur EC2                                                                    |
| -------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| Chemin du trafic : **S3 → PC local → R2** — double saut et limité par les vitesses d'upload de la connexion domestique. | Chemin du trafic : **S3 → EC2 → R2** — saut unique dans le backbone du cloud, souvent 10-25 Gbit/s. |
| Les limites du FAI domestique ou une bande passante asymétrique ralentissent les grandes migrations. | Débit nettement supérieur ; aucune limite locale.                                                  |
| Le CPU et la RAM locaux doivent hacher chaque octet.                                                | Décharge le CPU vers une VM cloud ; vous pouvez choisir des tailles d'instance plus grandes à la demande.                |
| Problèmes NAT/pare-feu possibles.                                                       | IP publique avec le port 5572 ouvert (ou tunnel via SSH).                                          |

## Partie 1. Déployer Rclone sur EC2 (Rclone externe)

1. **Lancez une instance EC2 Ubuntu** (t3.medium ou plus grande pour les uploads multithread).
2. **Ouvrez le port TCP 5572** dans le groupe de sécurité (ou utilisez un tunnel SSH).
3. **Installez Rclone** :
```bash
curl https://rclone.org/install.sh | sudo bash
```
4. **Lancez le daemon rcd** avec authentification de base :
```bash
rclone rcd --rc-addr=0.0.0.0:5572 --rc-user=admin --rc-pass=admin --log-level INFO
```
    Le drapeau `--rc-addr` expose des endpoints HTTP que RcloneView peut appeler.
    
5. **Vérification de l'état** depuis votre ordinateur portable :
```bash
   curl -u admin:admin -X POST "http://<EC2-IP or DNS-NAME>:5572/rc/noop"
```
    Une réponse JSON `{}` confirme que le daemon écoute bien.

👉 En savoir plus : [How to Run Rclone on AWS EC2 Server](/howto/cloud-storage-setting/run-rclone-on-aws-ec2)

## Partie 2. Ouvrir une nouvelle fenêtre RcloneView

Pour garder les connexions organisées, RcloneView permet à chaque fenêtre de fonctionner avec son propre moteur Rclone.

1. Lancez **RcloneView**  
2. Cliquez sur le bouton **`New Window`** dans le menu `Home`. 
3. Une nouvelle fenêtre d'application s'ouvre. Cette instance est indépendante de la fenêtre principale et conservera son propre contexte de connexion.  

  📌 _Vous connecterez cette fenêtre à votre Rclone externe (EC2) à l'étape suivante._..  

👉 En savoir plus : [Using Multiple Rclone Connections with New Window](/howto/rcloneview-advanced/multi-window).

## Partie 3. Se connecter au Rclone hébergé sur EC2

Dans la **fenêtre nouvellement ouverte**, suivez ces étapes pour vous connecter à votre Rclone externe hébergé sur EC2 :

1. Dans la nouvelle fenêtre, ouvrez **Settings → Connection Manager**.
2. Cliquez sur **New Connection** et remplissez le formulaire :

| Champ          | Valeur                              |
| -------------- | ---------------------------------- |
| Display Name   | `ec2-rclone`                       |
| Remote Address | `http://<EC2-IP or DNS-NAME>:5572` |
| Username       | `admin`                            |
| Password       | `admin`                            |

4. Cliquez sur **`Test Connection`** pour vérifier la configuration.  
   Vous devriez voir une réponse de connexion réussie.  
5. Si le test réussit, cliquez sur **`Save`**, puis **`Connect`**.  
6. Vous êtes maintenant connecté à votre **instance Rclone externe s'exécutant sur EC2**, et le statut de connexion doit apparaître en haut de la fenêtre.   

<div class="img-grid-2"> <img src="/support/images/en/tutorials/new-connection-to-ec2-rclone.png" alt="Create EC2 connection" class="img-medium img-center" /> <img src="/support/images/en/tutorials/connected-to-ec2-rclone.png" alt="Connected to EC2" class="img-medium img-center" /> </div>

## Partie 4. Ajouter les remotes AWS S3 et Cloudflare R2 (via Rclone externe)


### ➕ Ajouter le remote AWS S3

1. Allez dans l'onglet **`Remote`**, et cliquez sur **`+ New Remote`**.
2. Dans l'onglet **`Provider`**, choisissez **Amazon S3**.
3. Dans l'onglet **`Options`** :
   - Définissez `provider` sur `AWS`
   - Saisissez votre **Access Key ID** et votre **Secret Access Key**
   - La région et l'endpoint peuvent rester par défaut, sauf personnalisation
4. Cliquez sur **Save** pour terminer la configuration.

👉 En savoir plus :   
- [How to Add S3 Remote](/howto/remote-storage-connection-settings/s3)
- [How to get AWS S3 Access credential](/howto/cloud-storage-setting/aws-account-info)
    
### ➕ Ajouter le remote Cloudflare R2

1. Cliquez à nouveau sur **`+ New Remote`** dans l'onglet `Remote`.
2. Dans l'onglet **`Provider`**, sélectionnez **S3** (oui, encore — R2 utilise le protocole S3).
3. Dans l'onglet **`Options`** :
   - Définissez `provider` sur `Cloudflare`
   - Saisissez votre **Cloudflare R2 Access Key** et votre **Secret Key**
   - Définissez `endpoint` sur `https://<accountid>.r2.cloudflarestorage.com`
1. Cliquez sur **Save** pour terminer la configuration du remote R2.

👉 En savoir plus :   
- [How to Add S3 Remote](/howto/remote-storage-connection-settings/s3)
- [How to get cloudflare R2 Access credential](/howto/cloud-storage-setting/cloudflare-r2-credential)
    
<img src="/support/images/en/tutorials/open-aws-s3-and-cloudflare-r2-remotes.png" alt="open aws s3 and cloudflare r2 remotes" class="img-medium img-center" />

## Partie 5. Synchroniser des fichiers entre AWS S3 et Cloudflare R2

### 🔁 Méthode A : Utiliser Sync ou Job

1. Dans le panneau Explorer, sélectionnez le dossier **Cloudflare R2** et le dossier **AWS S3** que vous souhaitez synchroniser.
2. Cliquez sur le bouton **`Sync`** dans le menu `home`.
3. Choisissez les options de synchronisation (unidirectionnelle ou bidirectionnelle), prévisualisez les actions et confirmez.
4. RcloneView exécute la synchronisation et affiche la progression dans l'onglet de journal **`transfer`**.

- Pour des transferts répétés ou planifiés :
  1. Cliquez sur **`Save to Jobs`** dans la fenêtre modale Sync, ou ouvrez **`Job Manager`** → **`Add Job`**.
  2. Configurez la source, la destination et les options.
  3. Enregistrez et exécutez manuellement, ou définissez une planification.

👉 En savoir plus :
- [Synchronize Remote Storages](/howto/rcloneview-basic/synchronize-remote-storages)
- [Create Sync Jobs](/howto/rcloneview-basic/create-sync-jobs)
- [Execute & Manage Jobs](/howto/rcloneview-basic/execute-manage-job)

---

### ⏰ Méthode B : Planifier une tâche de synchronisation récurrente

1. Dans le panneau Explorer, sélectionnez les dossiers **Cloudflare R2** et **AWS S3** que vous souhaitez maintenir synchronisés.
2. Ouvrez **`Job Manager`** depuis le menu **`Home`** ou **`Remote`**, puis cliquez sur **`Add Job`**.
3. Confirmez votre source et votre destination.
4. Utilisez l'éditeur de planification pour définir quand la tâche doit s'exécuter. Prévisualisez votre planification avant d'enregistrer.
5. Enregistrez et activez la tâche planifiée.

RcloneView exécutera la synchronisation aux horaires que vous avez spécifiés. Consultez les détails d'exécution et les journaux dans **`Job History`** et recevez des notifications à la fin de l'exécution.

👉 En savoir plus : [Job Scheduling and Execution](/howto/rcloneview-advanced/job-scheduling-and-execution)

##  ⚡ Fiche d'optimisation des performances

| Paramètre                 | Valeur recommandée                                    | Niveau d'impact | Justification                                                                                                                                                                         |
| ------------------------- | ---------------------------------------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--s3-chunk-size`         | `50M`                                                | *****        | Des parties plus grandes réduisent les opérations de classe A sur R2 et améliorent la vitesse[1](https://forum.rclone.org/t/how-to-maximize-single-file-multipart-upload-speed-to-cloudflare-r2-s3-compatible/34311).   |
| `--s3-upload-concurrency` | `32–64`                                              | ***          | Augmente les threads multipart pour R2.                                                                                                                                               |
| `--transfers`             | `32–64`                                              | *            | Les uploads d'objets en parallèle augmentent le débit sur des liaisons 10 Gbit[1](https://forum.rclone.org/t/how-to-maximize-single-file-multipart-upload-speed-to-cloudflare-r2-s3-compatible/34311). |
| `--s3-disable-checksum`   | À ajouter uniquement si les <br />checksums sont réconciliés en externe | ****         | Évite le goulot d'étranglement du hachage par partie — à utiliser avec prudence[1](https://forum.rclone.org/t/how-to-maximize-single-file-multipart-upload-speed-to-cloudflare-r2-s3-compatible/34311).        |
## 📈 Résultats réels d'optimisation

Pour maximiser les performances lors des transferts cloud-à-cloud, nous avons affiné la configuration du **remote Cloudflare R2** comme décrit ci-dessous.

:::caution Résultats expérimentaux uniquement

RcloneView est une interface graphique pour Rclone. Les conseils d'optimisation des performances et les benchmarks partagés ici sont basés sur des tests expérimentaux inspirés de publications communautaires ( [How to Maximize Multipart Upload Speed to Cloudflare R2](https://forum.rclone.org/t/how-to-maximize-single-file-multipart-upload-speed-to-cloudflare-r2-s3-compatible/34311)) et peuvent varier selon votre environnement cloud spécifique, votre région, vos conditions réseau et votre cas d'usage.

Ces résultats ne sont **pas garantis** et doivent être utilisés uniquement à titre de référence.
:::

### 🔧 Comment mettre à jour les paramètres du remote R2

Pour modifier la configuration du remote R2 cible :

1. Dans le panneau **Explorer**, cliquez sur l'icône d'engrenage à côté de votre remote Cloudflare R2, ou allez dans **Remote Manager → Edit**.
2. Dans l'onglet **`Options`**, cliquez sur **`Show advanced options`**.
3. Définissez les valeurs suivantes :
   - `chunk_size = 50Mi`
   - `upload_concurrency = 32`
4. Enregistrez vos modifications.

L'option `disable_checksum` peut également avoir un impact significatif sur la vitesse de transfert. Cependant, pour ce test, nous l'avons laissée à sa valeur par défaut (`false`) afin de préserver les contrôles d'intégrité pendant le transfert de fichiers.
<img src="/support/images/en/tutorials/chunk-size-and-upload-concurrency-settings.png" alt="chunk size and upload concurrency settings" class="img-medium img-center" />
### 📉 Référence : performances par défaut

Avec les **paramètres par défaut** :

```text
- chunk_size = 5Mi 
- upload_concurrency = 4. 
```

nous avons observé des vitesses de transfert d'environ **114 Mo/s** lors du déplacement de grands fichiers d'**AWS S3** vers **Cloudflare R2** via un **Rclone hébergé sur EC2**.
<img src="/support/images/en/tutorials/transfer-speed-with-default-options.png" alt="transfer speed with default options" class="img-medium img-center" />

### 🚀 Après optimisation : un gain de performance ×4

En mettant à jour le remote Cloudflare R2 avec des paramètres optimisés :

```text
- chunk_size = 50Mi 
- upload_concurrency = 32

```

et en conservant `disable_checksum = false`, nous avons atteint des vitesses d'environ **440 Mo/s** — une **amélioration de 4×** par rapport à la valeur par défaut.

<img src="/support/images/en/tutorials/high-transfer-speed-with-chunk-size-and-upload-concurrency.png" alt="high transfer speed with chunk size and upload concurrency" class="img-medium img-center" />
## ✅ Résumé

Les transferts cloud-à-cloud n'ont plus besoin de ramper à travers votre ordinateur portable. En déchargeant le gros du travail vers un daemon Rclone externe sur EC2, vous débloquez des vitesses de migration proches du débit de ligne, évitez les surprises liées aux frais de sortie AWS, et gardez votre flux de travail entièrement visuel dans RcloneView. Commencez votre prochain déplacement S3 ↔ R2 en toute confiance — et dites adieu aux goulots d'étranglement locaux.

---

## 🔗 Guides associés

- **Configuration du stockage**
	- [How to Add S3-Compatible Remotes](/howto/remote-storage-connection-settings/s3)
	- [How to Get AWS S3 Access Credentials](/howto/cloud-storage-setting/aws-account-info)
	- [How to Get Cloudflare R2 Access Credentials](/howto/cloud-storage-setting/cloudflare-r2-credential)
- **EC2 et Rclone distant**
	- [How to Run Rclone on AWS EC2](/howto/cloud-storage-setting/run-rclone-on-aws-ec2)
- **Gestion des fenêtres et des connexions**
	- [Using Multiple Rclone Connections with New Window](/howto/rcloneview-advanced/multi-window)
	- [Manage Multiple RcloneView Windows](https://www.perplexity.ai/support/howto/rcloneview-advanced/multi-window) <!-- external duplicate, optional to keep -->
- **Synchronisation et gestion des tâches**
	- [Synchronize Remote Storages](/howto/rcloneview-basic/synchronize-remote-storages)
	- [Create Sync Jobs](/howto/rcloneview-basic/create-sync-jobs)
	- [Execute & Manage Jobs](/howto/rcloneview-basic/execute-manage-job)
	- [Job Scheduling and Execution](/howto/rcloneview-advanced/job-scheduling-and-execution)
- **Considérations sur les coûts**
	- [AWS Pricing – Data Transfer](https://aws.amazon.com/ec2/pricing/on-demand/#Data_Transfer)
- **Optimisation des performances**
	- [How to Maximize Multipart Upload Speed to Cloudflare R2](https://forum.rclone.org/t/how-to-maximize-single-file-multipart-upload-speed-to-cloudflare-r2-s3-compatible/34311)

<CloudSupportGrid />
