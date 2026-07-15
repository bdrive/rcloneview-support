---
sidebar_position: 2
description: "Découvrez comment utiliser RcloneView avec Wasabi pour parcourir, sauvegarder, synchroniser et migrer des données entre le stockage local et d'autres clouds."
keywords:
  - rcloneview
  - wasabi
  - s3-compatible
  - sauvegarde cloud
  - synchronisation cloud
  - migration cloud
  - synchronisation de fichiers
  - gui
  - rclone gui
tags:
  - RcloneView
  - cloud-file-transfer
  - cloud-migration
  - cloud-backup
  - Tutorial
  - wasabi
date: 2025-02-20
author: Jay
slug: /
---

# Utiliser Wasabi avec RcloneView (compatible S3)

RcloneView est une application de bureau qui offre une interface Explorateur visuelle à deux volets pour **rclone**. Elle vous permet de copier, synchroniser et migrer des fichiers entre **Wasabi** et d'autres services de stockage cloud ou local, sans utiliser la ligne de commande.

Avec RcloneView, vous pouvez :

- Parcourir vos buckets Wasabi comme des dossiers locaux  
- Glisser-déposer des fichiers entre **disque local ↔ Wasabi** ou **Wasabi ↔ autres clouds**  
- Lancer des transferts ponctuels ou planifier des tâches de synchronisation récurrentes  

Si vous préférez d'abord voir cela en action, vous pouvez regarder une courte démonstration :

<iframe
  src="https://www.youtube.com/embed/yKc6qS2DG2A"
  title="Wasabi + RcloneView Demo"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowFullScreen
  loading="lazy"
  style={{aspectRatio: '16 / 9', width: '100%', maxWidth: '960px', height: 'auto', display: 'block', margin: '0 auto', border: 0}}
></iframe>

<br />

> Pour en savoir plus sur RcloneView, consultez le site officiel : [https://rcloneview.com](https://rcloneview.com)  


---

## 1. Télécharger et installer RcloneView

RcloneView est disponible pour **Windows, macOS et Linux**.

1. Rendez-vous sur la page de téléchargement : [https://rcloneview.com/src/download](https://rcloneview.com/src/download).  
2. Choisissez l'installateur correspondant à votre système d'exploitation (Windows, macOS ou Linux).  
3. Installez et lancez **RcloneView**.

---

## 2. Ajouter Wasabi comme remote dans RcloneView

RcloneView traite Wasabi comme un backend **compatible S3**. Vous créez un distant une fois, puis vous le réutilisez pour parcourir, copier, synchroniser et planifier des tâches.

### 2.1 Prérequis – Clés d'accès et endpoint Wasabi

Pour connecter RcloneView à Wasabi, vous avez besoin de :

- **Access Key** / **Secret Key**  
- **Région / URL de l'endpoint** (par exemple la région `ap-northeast-2` et l'endpoint `s3.ap-northeast-2.wasabisys.com`)  

Veuillez suivre la documentation officielle de Wasabi pour créer une clé d'accès et trouver votre endpoint :

- Documentation Wasabi : [https://docs.wasabi.com/docs](https://docs.wasabi.com/docs)  
- Exemple : « [Creating a New Access Key](https://docs.wasabi.com/docs/creating-a-new-access-key) » ou « [Creating a Bucket](https://docs.wasabi.com/docs/creating-a-bucket) » (recherchez dans le portail de documentation Wasabi).

Une fois que vous avez votre **Access Key**, votre **Secret Key** et votre **Endpoint**, revenez à RcloneView.

### 2.2 Ouvrir l'assistant « New Remote »

1. Lancez **RcloneView**.  
2. Depuis le menu supérieur, cliquez sur **`Remote` → `+ New Remote`**.  
   - Ou cliquez sur l'onglet **`+`** dans le volet Explorateur et choisissez **`New Remote`**.

<div class="img-grid-2">
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote.png" alt="add new remote" class="img-medium img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote-explorer.png" alt="add new remote explorer" class="img-medium img-center" />
</div>

### 2.3 Configurer Wasabi comme fournisseur compatible S3

1. Dans la boîte de dialogue **New Remote**, recherchez `Wasabi`.  
2. Sélectionnez la tuile du fournisseur **Wasabi**.  
3. Configurez la connexion :
   - **Remote name** : saisissez un nom clair, comme `MyWasabi`.  
   - **Access Key ID** : collez votre clé d'accès Wasabi.  
   - **Secret Access Key** : collez votre clé secrète Wasabi.  
   - **Endpoint** : saisissez l'endpoint S3 de Wasabi (par exemple `s3.ap-northeast-2.wasabisys.com`).  
4. Cliquez sur **Add Remote**.

<img src="/support/images/en/tutorials/add-new-wasabi-remote-configuration.png" alt="add new wasabi remote configuration" class="img-large img-center" />

### 2.4 Vérifier le distant Wasabi

1. Ouvrez **`Remote → Remote Manager`**.  
2. Confirmez que votre distant Wasabi (par exemple `MyWasabi`) est répertorié et accessible.

<img src="/support/images/en/tutorials/verify-wasabi-in-remote-manager.png" alt="verify wasabi in remote manager" class="img-large img-center" />

Pour plus de détails, consultez le guide général compatible S3 :  
- [How to Add S3-Compatible Remote](/howto/remote-storage-connection-settings/s3)

---

## 3. Parcourir les dossiers dans Wasabi

Une fois le distant créé, vous pouvez parcourir les buckets et objets dans l'Explorateur de RcloneView.

1. Dans le volet Explorateur, cliquez sur l'onglet **`+`**.  
2. Dans la liste « Open Remote », choisissez votre distant **Wasabi** (par exemple `MyWasabi`).  
3. RcloneView ouvre le distant dans un onglet où les buckets apparaissent comme des dossiers de premier niveau.  
4. Double-cliquez sur un bucket pour explorer son contenu.

<img src="/support/images/en/tutorials/wasabi-remote-in-rcloneview-explorer.png" alt="wasabi remote in rcloneview explorer" class="img-large img-center" />

Pour des conseils de navigation plus généraux, consultez :  
- [File Management with RcloneView](/howto/rcloneview-basic/browse-and-manage-remote-storage)

---

## 4. Gérer les fichiers entre le disque local et Wasabi

Cette section présente des méthodes pratiques pour déplacer des données entre votre ordinateur local et Wasabi à l'aide de RcloneView.

Vous pouvez ouvrir :

- **Volet de gauche** : disque local (par exemple `C:\` ou un dossier spécifique)  
- **Volet de droite** : votre bucket distant Wasabi  

Utilisez ensuite le glisser-déposer, la comparaison de dossiers ou les tâches de synchronisation selon votre flux de travail.

---

### 4.1 Glisser-déposer entre le local et Wasabi

Le glisser-déposer est le moyen le plus simple de copier des fichiers.

1. Dans le volet de gauche, ouvrez votre **dossier local** (par exemple `D:\Media`).  
2. Dans le volet de droite, ouvrez votre **bucket/dossier Wasabi**.  
3. Sélectionnez des fichiers ou des dossiers à gauche.  
4. Faites-les glisser vers le volet de droite et déposez-les à l'emplacement souhaité.  
5. RcloneView démarre une tâche de transfert ; la progression apparaît dans l'onglet **Transfer**.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="wasabi drag and drop" class="img-large img-center" />
Pour la sélection multiple, les actions du clic droit et plus encore, consultez :  
- [File Management with RcloneView](/howto/rcloneview-basic/browse-and-manage-remote-storage)

---

### 4.2 Comparer des dossiers et copier les fichiers modifiés

Si vous souhaitez voir les **différences** avant de copier, utilisez la fonction **Compare**.

Cas d'usage typique : comparer un dossier de sauvegarde local avec un dossier de sauvegarde Wasabi.

1. Dans le volet de gauche, ouvrez le **dossier source** (par exemple local ou un autre cloud).  
2. Dans le volet de droite, ouvrez le **dossier de destination Wasabi**.  
3. Cliquez sur **`Compare`** dans le menu **Home** en haut.  
4. RcloneView marque :
   - Les fichiers présents uniquement à gauche (source uniquement)  
   - Les fichiers présents uniquement à droite (destination uniquement)  
   - Les fichiers modifiés (taille, horodatage ou somme de contrôle différents)  
5. Sélectionnez les éléments que vous souhaitez déplacer et cliquez sur **Copy →** (ou **← Copy** pour le sens inverse).

<img src="/support/images/en/tutorials/wasabi-and-local-compare-and-copy.png" alt="wasabi and local compare and copy" class="img-large img-center" />
En savoir plus :  
- [Compare Folder Contents](/howto/rcloneview-basic/compare-folder-contents)

---

### 4.3 Tâches de synchronisation entre le disque local et Wasabi

Pour des sauvegardes répétables ou une mise en miroir, utilisez **Sync**. La synchronisation fait correspondre la destination à la source.

Il existe trois schémas courants :

- **Instant Sync** (exécution unique immédiate)  
- **Saved Sync Job** (réexécution à la demande)  
- **Scheduled Sync Job** (exécution automatique selon un planning)  

> ⚠️ La synchronisation met à jour la destination pour qu'elle corresponde à la source ; les fichiers qui n'existent que dans la destination peuvent être supprimés. Vérifiez attentivement les paramètres de synchronisation avant de l'exécuter.

#### 4.3.1 Instant Sync (exécution unique)

1. Ouvrez le **dossier source** dans le volet de gauche (par exemple, un dossier local).  
2. Ouvrez le **dossier de destination Wasabi** dans le volet de droite.  
3. Cliquez sur **`Sync`** dans le menu **Home**.  

<img src="/support/images/en/tutorials/wasabi-and-local-instant-sync.png" alt="wasabi and local instant sync" class="img-large img-center" />

Ensuite, dans la boîte de dialogue **Sync** :

1. Dans **Configure Storage**, confirmez la source et la destination.  
2. Ajustez éventuellement les **Advanced Settings** ou les **Filtering Settings**.  
3. Lancez d'abord un **Dry Run** si vous souhaitez prévisualiser les modifications.  
4. Cliquez sur **Run** pour démarrer la synchronisation.

<img src="/support/images/en/tutorials/wasabi-configure-sync-job.png" alt="wasabi configure sync job" class="img-large img-center" />
Après avoir lancé la synchronisation, vous pouvez suivre la progression du transfert de fichiers en temps réel.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="wasabi real time monitoring transferring" class="img-large img-center" />

Référence :  
- [Synchronize Remote Storages Instantly](/howto/rcloneview-basic/synchronize-remote-storages)

#### 4.3.2 Enregistrer une tâche de synchronisation pour la réutiliser

Si vous allez exécuter régulièrement la même sauvegarde local → Wasabi :  
Configurez une synchronisation comme ci-dessus (source à gauche, destination Wasabi à droite).    

1. Dans la boîte de dialogue Sync, choisissez **Save to Jobs** au lieu de l'exécuter immédiatement.  
2. Donnez à la tâche un nom explicite comme `SyncLocalToWasabi`.  
3. Plus tard, ouvrez **Job Manager** et exécutez la tâche manuellement chaque fois que vous avez besoin d'une sauvegarde à jour.

<img src="/support/images/en/tutorials/wasabi-saved-sync-job-execution.png" alt="wasabi saved sync job execution" class="img-large img-right" />  
Sur les plateformes prises en charge (comme Windows), RcloneView peut afficher une notification système lorsque la tâche se termine.

Référence :  
- [Create Sync Jobs](/howto/rcloneview-basic/create-sync-jobs)  
- [Execute & Manage Jobs](/howto/rcloneview-basic/execute-manage-job)

#### 4.3.3 Planifier des sauvegardes Wasabi automatiques (planification de tâches)

Pour automatiser entièrement les sauvegardes vers Wasabi, planifiez votre tâche de synchronisation.

> 📌 **La planification de tâches est une fonctionnalité PLUS.** Vous avez besoin d'une [licence PLUS](https://rcloneview.com/src/pricing.html) pour activer la planification.

Ouvrez **Job Manager** depuis la barre d'outils.    
1. Sélectionnez votre tâche de synchronisation Wasabi (par exemple `LocalToWasabi_DailyBackup`) et cliquez sur **Edit Job**, ou créez une nouvelle tâche à partir de votre sélection actuelle dans l'Explorateur.  
2. Accédez à **Step 4: Scheduling**.  
3. Activez **Run whenever time units ~** et définissez le planning (par exemple, tous les jours à 01h00).  
4. Utilisez **Simulate** pour prévisualiser les prochaines exécutions.  
5. Enregistrez la tâche et laissez RcloneView en cours d'exécution ; la tâche s'exécutera automatiquement.

<img src="/support/images/en/tutorials/scheule-automatic-wasabi-backup.png" alt="scheule automatic wasabi backup" class="img-large img-center" />


Pour plus de détails :  
- [Job Scheduling and Automated Execution](/howto/rcloneview-advanced/job-scheduling-and-execution)

---

### 4.4 Utiliser Mount pour travailler avec Wasabi dans l'Explorateur Windows

Vous pouvez monter un bucket Wasabi comme un **lecteur ou dossier virtuel** sur votre système, puis utiliser l'Explorateur Windows (ou le Finder sur macOS) comme d'habitude.

Déroulement typique :

Assurez-vous que votre distant Wasabi est configuré et fonctionnel.  
1. Choisissez le dossier Wasabi que vous souhaitez monter.  
2. Cliquez sur l'icône **Mount** dans le coin supérieur droit de l'Explorateur RcloneView.  
3. Cliquez sur le bouton **Save and mount** pour démarrer le montage.  
4. Après quelques instants, un nouveau lecteur ou dossier apparaît dans votre système d'exploitation. La navigation dans ce chemin lit et écrit directement les données depuis Wasabi via RcloneView/rclone.

<img src="/support/images/en/tutorials/mount-wasabi-as-local-drive.png" alt="mount wasabi as local drive" class="img-large img-center" />
Plus d'informations :  
- [Mount Cloud Storage as a Local Drive](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)

---

## 5. Où obtenir de l'aide

- Documentation RcloneView et guides pratiques : [https://rcloneview.com/support](https://rcloneview.com/support)  
- Portail de documentation Wasabi : [https://docs.wasabi.com](https://docs.wasabi.com)  

En combinant le stockage d'objets compatible S3 de Wasabi avec la gestion visuelle des tâches de RcloneView, vous pouvez créer des flux de travail fiables de sauvegarde, de synchronisation et de migration sans avoir à apprendre la syntaxe en ligne de commande de rclone.
