---
sidebar_position: 6
description: "Apprenez à créer et gérer des tâches de synchronisation dans RcloneView pour une synchronisation répétée ou planifiée de dossiers distants."
keywords:
  - rcloneview
  - cloud
  - sync
  - rclone
  - tâche de synchronisation
  - gestionnaire de tâches
  - synchronisation planifiée
  - créer une synchronisation
  - automatisation rclone
  - licence plus
  - stockage cloud
  - stockage distant
tags:
  - RcloneView
  - Cloud
  - Sync
  - job-scheduler
  - create-job
  - Job-Management
date: 2025-06-04
author: Jay
---
# Créer des tâches de synchronisation

Vous pouvez créer des tâches de synchronisation fréquemment utilisées sous forme de **Tâches (Jobs)**, ce qui vous permet de les exécuter à nouveau en quelques clics.  

Il existe deux méthodes principales pour créer une Tâche :  
- Créer une Tâche directement depuis une tâche de synchronisation (Synchronisation instantanée). 
- Utiliser le **Gestionnaire de tâches** pour configurer et enregistrer des Tâches manuellement. 

## Créer une Tâche depuis la Synchronisation instantanée

Vous pouvez créer une Tâche en configurant votre tâche de synchronisation et en cliquant sur **Save to Jobs** dans la fenêtre de synchronisation.  

👉 Voir : [Créer instantanément une tâche depuis la synchronisation](/howto/rcloneview-basic/synchronize-remote-storages#save-sync-operation-as-a-job)

Vous pouvez consulter et exécuter les tâches enregistrées en cliquant sur la barre d'outils **`Job Manager`** dans le menu Accueil.

## Créer une Tâche via le Gestionnaire de tâches


### (Facultatif) Sélectionner les dossiers source et destination

Vous pouvez éventuellement spécifier les dossiers source et destination avant de créer une Tâche à l'aide du **Gestionnaire de tâches**.  

Cela est utile si vous souhaitez préassigner des dossiers avant d'ajouter une nouvelle tâche plus tard.  

Vous pouvez également configurer les dossiers source et destination directement dans la fenêtre **Add Job** du **Gestionnaire de tâches**.  

Pour ouvrir le Gestionnaire de tâches, cliquez sur le bouton **Job Manager** dans la barre d'outils Accueil.

<img src="/support/images/en/howto/rcloneview-basic/create-job-using-job-manager.png" alt="create job using job manager" class="img-medium img-center" />

### Ajouter une nouvelle Tâche

Pour ajouter une nouvelle tâche, cliquez sur **`Add Job`** dans la fenêtre modale **Job Manager** (=`Jobs`).  

#### Étape 0 : Ouvrir le Gestionnaire de tâches et cliquer sur `Add Job`

  Vous verrez la fenêtre `Jobs` suivante. Cliquez sur le bouton **Add Job** pour ouvrir l'assistant de création de tâche.

<img src="/support/images/en/howto/rcloneview-basic/add-job-in-job-manager.png" alt="add job in job manager" class="img-medium img-center" />
  L'assistant de tâche vous guide à travers trois étapes :

1. **Configure Storage** – Choisir les dossiers source et destination  
2. **Advanced Settings (optional)** – Définir le comportement de synchronisation  
3. **Filtering Settings (optional)** – Définir des filtres pour les types de fichiers ou les dossiers
<div class="img-grid-3">
<img src="/support/images/en/howto/rcloneview-basic/add-job-configure-storage.png" alt="add job configure storage" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/add-job-advnaced-settings.png" alt="add job advnaced settings" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/add-job-filtering-settings.png" alt="add job filtering settings" class="img-medium img-center" />
</div>
#### Étape 1 : Configure Storage

- Dans l'étape **`Configure Storage`**, vérifiez les dossiers source et destination sélectionnés.
- Saisissez le **`Job Name`**  ( ❗Caractères autorisés : `a–z`, `A–Z`, `0–9`, `-`, `_` )
- Pour synchroniser une source avec plusieurs destinations, cliquez sur **Add Destination** pour ajouter des dossiers distants supplémentaires.  
  Cela permet une synchronisation **1:N (une vers plusieurs)**.  
- Assurez-vous que tous les dossiers sont correctement définis avant de cliquer sur **Next**.

:::caution Fonctionnement de la synchronisation
La synchronisation RcloneView rend la source et la destination identiques.  
Cela signifie **`modifier uniquement la destination`**.  
- Le contenu du dossier **source** est reflété dans le dossier **destination**.  
- Tout fichier existant dans la destination qui n'existe pas dans la source sera **supprimé**.  

👍 **Important :** Rclone prend officiellement en charge uniquement la **synchronisation unidirectionnelle**.  
⚠️ La **synchronisation bidirectionnelle (=Bidirection)** est disponible en tant que **fonctionnalité bêta** et n'est pas officiellement prise en charge. Elle peut entraîner un comportement inattendu ou des erreurs, il est donc **déconseillé de l'utiliser en production**.
:::

<details>
<summary>Détails de Configure Storage</summary>

<img src="/support/images/en/howto/rcloneview-basic/job-config-storage-details.png" alt="job config storage details" class="img-medium img-center" />

1. **`Job Name`**. 
 - ❗Caractères autorisés : `a–z`, `A–Z`, `0–9`, `-`, `_` 
2. **Sélectionnez le dossier source**.   
 - Cliquez sur l'icône de dossier dans le panneau de gauche pour choisir la source.  
1. **Sélectionnez le dossier de destination**. 
- Cliquez sur l'icône de dossier dans le panneau de droite pour choisir la destination.  
1. **Ajoutez des destinations supplémentaires** (facultatif). 
- Cliquez sur le bouton **Add Destination** pour synchroniser vers plusieurs destinations à la fois. Vous pouvez configurer une **synchronisation 1:N** si nécessaire.  
5. **Choisissez le sens de la synchronisation**. 
 - **Modifier uniquement la destination** : Synchronise de la source vers la destination. Met à jour ou supprime le contenu de la destination pour correspondre à la source.  
 - **Bidirection** (bêta) : Compare les deux dossiers et synchronise les modifications dans les deux sens.  
⚠️ Ce mode peut écraser involontairement de nouveaux fichiers, utilisez-le donc avec prudence.  
6. **Créer des répertoires vides (facultatif)**.   
- Si cette option est activée, tout répertoire source ne contenant aucun fichier sera recréé sous forme de dossier vide dans la destination.  

:::caution Utilisation de la synchronisation bidirectionnelle dans RcloneView
RcloneView utilise `bisync` (une commande bêta de rclone) pour effectuer la synchronisation bidirectionnelle.    
Cette fonctionnalité étant encore **expérimentale**, nous recommandons de consulter le [manuel d'utilisation officiel](https://rclone.org/bisync/) — en particulier la section [Limitations](https://rclone.org/bisync/#limitations) — avant de l'activer.

Une utilisation incorrecte de bisync peut entraîner une perte de données. Veuillez l'utiliser avec prudence.
:::


</details>

#### Étape 2 : Advanced Settings (optional)

  - Les paramètres avancés incluent des options pour :
	  - Les performances de transfert
	  - La méthode de connexion
	  - Le comportement de gestion des erreurs

> 💡 Nous recommandons d'utiliser les valeurs par défaut, sauf si vous avez besoin d'un comportement personnalisé.

<details>
<summary>Détails des Advanced Settings</summary>

<img src="/support/images/en/howto/rcloneview-basic/sync-advanced-settings-details.png" alt="sync advanced settings details" class="img-medium img-center" /> 
**Performance :**

1. **`Number of file transfers`** :   
   Le nombre de transferts de fichiers à exécuter en parallèle. Il peut parfois être utile de réduire ce nombre si le distant génère beaucoup de délais d'attente, ou de l'augmenter si vous disposez d'une large bande passante et d'un distant rapide.  
2. **`Number of multi thread transfers`** :  
   Lors de l'utilisation de transferts multithread, ce paramètre définit le nombre de flux à utiliser. Réglez sur `0` pour désactiver les transferts multithread (par défaut 4). Lors du transfert de fichiers de plus de 256 Mo vers des backends compatibles, rclone utilisera plusieurs threads pour transférer le fichier.  
3. **`Number of equaility checkers`** :  
   Les vérificateurs effectuent le contrôle d'égalité des fichiers pendant une synchronisation. Pour certains systèmes de stockage (par ex. S3, Swift, Dropbox), cela peut prendre un temps considérable, c'est pourquoi ils s'exécutent en parallèle. Par défaut, 8 vérificateurs s'exécutent en parallèle. Cependant, en cas de backends lents à réagir, vous devrez peut-être réduire (plutôt qu'augmenter) cette valeur par défaut en définissant `--checkers` sur 4 threads ou moins.  


**Sécurité et intégrité :**

5. **` Enable checksum to compare files`** :  
   Normalement, rclone examine la date de modification et la taille des fichiers pour déterminer s'ils sont identiques. Si vous activez cette option, rclone vérifiera le hachage et la taille du fichier pour déterminer si les fichiers sont identiques. Ceci est très utile lors du transfert entre distants qui stockent le même type de hachage sur l'objet, par exemple Drive et Swift. Pour connaître les distants prenant en charge chaque type de hachage, consultez le tableau de la [section aperçu](https://rclone.org/overview/).  


**Contrôle des erreurs :**

5. **`Retry the entire sync if it fails this many times`** :  
   Réessaye l'intégralité de la synchronisation si elle échoue ce nombre de fois (par défaut 3). Certains distants peuvent être peu fiables, et quelques nouvelles tentatives aident à récupérer les fichiers qui n'ont pas été transférés en raison d'erreurs. Désactivez les nouvelles tentatives avec `1`.  

</details>



#### Étape 3 : Filtering Settings (optional)

- RcloneView applique par défaut des filtres de base pour des services comme Google Docs ou Box Docs.
- Vous pouvez ajouter d'autres types de fichiers ou dossiers à exclure de la synchronisation.

<details>
<summary>Détails des Filtering Settings</summary>


<img src="/support/images/en/howto/rcloneview-basic/jobs-filtering-setttings-details.png" alt="jobs filtering setttings details" class="img-medium img-center" />
1. **`Don't sync files over`** :  
   Contrôle la **taille de fichier maximale** autorisée pour la synchronisation.  
   L'unité par défaut est le Mo.  
2. **`Don't sync files older than this`** :    
   Contrôle l'**ancienneté maximale de fichier** autorisée pour la synchronisation.  
   Cela s'applique uniquement aux **fichiers**, pas aux répertoires.  
   Utilisez les unités suivantes :  
   `y` = années, `d` = jours, `h` = heures, `m` = minutes, `s` = secondes  (Exemple : 2y30d12h30m45s)  
3. **`Don't sync folders over this depth`** :   
   Si cette option est définie, Rclone ne synchronisera que les dossiers dans la profondeur spécifiée.  
   Par exemple, si vous définissez cette valeur sur `1`, seuls les fichiers du répertoire de premier niveau seront synchronisés.  
   La définir sur `2` synchronisera les fichiers dans les deux premiers niveaux de dossiers, et ainsi de suite.
4. **Predefined Filters**.   
   Vous pouvez appliquer rapidement des filtres intégrés pour les types de fichiers courants tels que :  
   - Music, Video, Image, Document, Google Docs, Box Docs  
     Ces filtres sont disponibles en tant qu'options prédéfinies dans la liste des filtres.
1. **Others (= Custom Filters)**.  
   Vous pouvez définir des règles personnalisées pour exclure ou inclure des types de fichiers, des dossiers ou des chemins spécifiques.  
   Voici quelques exemples courants :  
   **`.iso`** : Exclut tous les fichiers .iso.  
   **`/.git/*`** : Exclut uniquement les fichiers à l'intérieur du dossier .git à la racine, mais pas les sous-dossiers.  
   **`/.git/`** : Exclut l'intégralité du dossier .git à la racine, y compris tout son contenu.   
   **`.git/`** : Exclut tous les dossiers .git et leur contenu, quel que soit leur emplacement.   
   
   🔗 Pour des exemples plus avancés et la syntaxe complète, consultez le [Guide de filtrage Rclone](https://rclone.org/filtering/#exclude-exclude-files-matching-pattern)


</details>


#### Étape 4 : Scheduling (Available with PLUS License)

La planification des tâches vous permet d'exécuter automatiquement des tâches à des intervalles ou à des heures spécifiés.   

💡 Cette fonctionnalité est disponible exclusivement avec la [**licence PLUS**](https://rcloneview.com/src/pricing.html).  

Pour plus de détails, consultez [Configurer une planification de tâche](/howto/rcloneview-advanced/job-scheduling-and-execution).   

Enfin, vérifiez la tâche que vous avez créée dans la liste pour vous assurer que tout est correctement configuré.

<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-basic/add-job-scheduling.png" alt="add job scheduling" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/add-job-completed.png" alt="add job completed" class="img-medium img-center" />
</div>
