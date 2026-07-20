---
sidebar_position: 5
description: "Découvrez comment reproduire instantanément des dossiers entre un stockage local ou cloud grâce à la puissante fonctionnalité de synchronisation de RcloneView. Inclut la configuration, les filtres, le mode simulation et les options de planification."
keywords:
  - rcloneview
  - cloud
  - sync
  - rclone
  - sync folders
  - bidirectional sync
  - sync job
  - dry run
  - scheduled sync
  - job scheduling
  - Job Monitor
tags:
  - RcloneView
  - Cloud
  - Sync
  - cloud-storage
  - file-synchronization
  - job-scheduler
  - dry-run
  - Remote-Storage
date: 2025-06-04
author: Jay
---
# Synchroniser des stockages distants instantanément

Utilisez la fonctionnalité **`Sync`** de RcloneView pour reproduire instantanément des dossiers entre des distants cloud ou un stockage local.  

Ce guide vous accompagne dans la configuration et l'exécution d'une opération de synchronisation.
## Sélectionner les dossiers source et destination

Pour démarrer une opération de synchronisation, vous devez définir les dossiers **Source** et **Destination**.

- Dans le panneau **Explorer**, ouvrez deux onglets :
	- Le dossier sélectionné dans l'**onglet de gauche** devient la **Source**
	- Le dossier sélectionné dans l'**onglet de droite** devient la **Destination**

- Vous pouvez aussi saisir directement les chemins des dossiers via la **barre de chemin** en haut de chaque onglet.
- Ces paramètres pourront être ajustés ultérieurement dans la fenêtre de configuration **Sync** si nécessaire.

Une fois les dossiers sélectionnés, cliquez sur le bouton **`Sync`** dans le menu supérieur **`Home`** pour continuer.
<img src="/support/images/en/howto/rcloneview-basic/sync-remote-folder-select.png" alt="sync remote folder select" class="img-medium img-center" />
## Exécuter l'opération de synchronisation

Après avoir sélectionné les dossiers source et destination, vous pouvez configurer et lancer votre synchronisation.


<div class="img-grid-3">
<img src="/support/images/en/howto/rcloneview-basic/sync-configure-storage.png" alt="sync configure storage" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/sync-advanced-settings.png" alt="sync advanced settings" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/sync-filtering-settings.png" alt="sync filtering settings" class="img-medium img-center" />
</div>

### Étape 1 : Vérifier les chemins des dossiers

- Dans l'étape **`Configure Storage`**, vérifiez les dossiers source et destination sélectionnés.
- Assurez-vous que les deux sont correctement définis avant de cliquer sur **Next**.

:::caution Fonctionnement de la synchronisation
La synchronisation RcloneView rend la source et la destination identiques.  
Cela signifie **`modifying destination only`** (modification de la destination uniquement).  
- Le contenu du dossier **source** est reproduit vers la **destination**.  
- Tout fichier existant dans la destination qui n'existe pas dans la source sera **supprimé**.  

👍 **Important :** Rclone prend officiellement en charge uniquement la **synchronisation unidirectionnelle**.  
⚠️ La **synchronisation bidirectionnelle (=Bidirection)** est disponible en tant que **fonctionnalité bêta** et n'est pas officiellement prise en charge. Elle peut provoquer un comportement inattendu ou des erreurs, elle n'est donc **pas recommandée en production**.
:::

<details>
<summary>Détails de Configure Storage</summary>

<img src="/support/images/en/howto/rcloneview-basic/sync-config-storage-details.png" alt="sync config storage details" class="img-medium img-center" />

1. **Sélectionnez le dossier source**.   
 - Cliquez sur l'icône de dossier dans le panneau de gauche pour choisir la source.  
2. **Sélectionnez le dossier destination**. 
- Cliquez sur l'icône de dossier dans le panneau de droite pour choisir la destination.  
3. **Ajoutez des destinations supplémentaires** (optionnel). 
- Cliquez sur le bouton **Add Destination** pour synchroniser vers plusieurs destinations à la fois. Vous pouvez configurer une **synchronisation 1:N** si nécessaire.  
4. **Choisissez le sens de synchronisation**. 
 - **Modifying destination only** : Synchronise de la source vers la destination. Met à jour ou supprime le contenu de la destination pour correspondre à la source.  
 - **Bidirection** (Bêta) : Compare les deux dossiers et synchronise les changements dans les deux sens.  
⚠️ Ce mode peut écraser des fichiers récents de façon involontaire, utilisez-le donc avec prudence.  
5. **Créer des répertoires vides (optionnel)**.   
- Si activé, tout répertoire source ne contenant aucun fichier sera recréé sous forme de dossier vide dans la destination.  

:::caution Utiliser la synchronisation bidirectionnelle dans RcloneView
RcloneView utilise `bisync` (une commande bêta de rclone) pour effectuer la synchronisation bidirectionnelle.    
Cette fonctionnalité étant encore **expérimentale**, nous recommandons de consulter le [manuel utilisateur officiel](https://rclone.org/bisync/) — en particulier la section [Limitations](https://rclone.org/bisync/#limitations) — avant de l'activer.

Une utilisation incorrecte de bisync peut entraîner une perte de données. Veuillez l'utiliser avec prudence.
:::


</details>

### Étape 2 : Paramètres avancés (optionnel)

  - Les paramètres avancés incluent des options pour :
	  - Les performances de transfert
	  - La méthode de connexion
	  - Le comportement de gestion des erreurs

> 💡 Nous recommandons d'utiliser les valeurs par défaut, sauf si vous avez besoin d'un comportement personnalisé.

<details>
<summary>Détails des paramètres avancés</summary>

<img src="/support/images/en/howto/rcloneview-basic/sync-advanced-settings-details.png" alt="sync advanced settings details" class="img-medium img-center" /> 
**Performance :**

1. **`Number of file transfers`** :   
   Le nombre de transferts de fichiers à exécuter en parallèle. Il peut parfois être utile de réduire cette valeur si le distant génère beaucoup de délais d'attente (timeouts), ou de l'augmenter si vous disposez d'une bande passante importante et d'un distant rapide.  
2. **`Number of multi thread transfers`** :  
   Lors de l'utilisation des transferts multi-thread, ce paramètre définit le nombre de flux à utiliser. Réglez sur `0` pour désactiver les transferts multi-thread (valeur par défaut : 4). Pour les fichiers de plus de 256 Mo transférés vers des backends compatibles, rclone utilisera plusieurs threads pour transférer le fichier.  
3. **`Number of equaility checkers`** :  
   Les checkers effectuent la vérification d'égalité des fichiers pendant une synchronisation. Pour certains systèmes de stockage (par exemple S3, Swift, Dropbox), cela peut prendre un temps significatif, ils sont donc exécutés en parallèle. Par défaut, 8 checkers sont exécutés en parallèle. Toutefois, en cas de backends lents à répondre, vous devrez peut-être réduire (plutôt qu'augmenter) cette valeur par défaut en définissant `--checkers` sur 4 threads ou moins.  


**Sécurité et intégrité :**

5. **` Enable checksum to compare files`** :  
   Normalement, rclone se base sur la date de modification et la taille des fichiers pour déterminer s'ils sont identiques. Si vous activez cette option, rclone vérifiera le hash et la taille du fichier pour déterminer si les fichiers sont identiques. Ceci est très utile lors d'un transfert entre distants stockant le même type de hash sur l'objet, par exemple Drive et Swift. Pour savoir quels distants prennent en charge quel type de hash, consultez le tableau de la [section overview](https://rclone.org/overview/).  


**Contrôle des erreurs :**

5. **`Retry the entire sync if it fails this many times`** :  
   Relance l'intégralité de la synchronisation si elle échoue ce nombre de fois (valeur par défaut : 3). Certains distants peuvent être instables, et quelques tentatives supplémentaires permettent de récupérer les fichiers qui n'ont pas été transférés à cause d'erreurs. Désactivez les nouvelles tentatives avec `1`.  

</details>



### Étape 3 : Filtrer les fichiers et dossiers (optionnel)

- RcloneView applique par défaut des filtres de base pour des services comme Google Docs ou Box Docs.
- Vous pouvez ajouter d'autres types de fichiers ou dossiers à exclure de la synchronisation.

<details>
<summary>Détails des paramètres de filtrage</summary>

<img src="/support/images/en/howto/rcloneview-basic/sync-filtering-settings-details.png" alt="sync filtering settings details" class="img-medium img-center" />

1. **`Don't sync files over`** :  
   Contrôle la **taille maximale de fichier** autorisée pour la synchronisation.  
   L'unité par défaut est le Mo.  
2. **`Don't sync files older than this`** :    
   Contrôle l'**ancienneté maximale de fichier** autorisée pour la synchronisation.  
   Cela s'applique uniquement aux **fichiers**, pas aux répertoires.  
   Utilisez les unités suivantes :  
   `y` = années, `d` = jours, `h` = heures, `m` = minutes, `s` = secondes (exemple : 2y30d12h30m45s)  
3. **`Don't sync folders over this depth`** :   
   Si défini, Rclone ne synchronisera que les dossiers dans la profondeur spécifiée.  
   Par exemple, définir cette valeur à `1` ne synchronisera que les fichiers du répertoire de premier niveau.  
   La définir à `2` synchronisera les fichiers dans les deux premiers niveaux de dossiers, et ainsi de suite.
4. **Filtres prédéfinis**.   
   Vous pouvez appliquer rapidement des filtres intégrés pour les types de fichiers courants tels que :  
   - Musique, Vidéo, Image, Document, Google Docs, Box Docs  
     Ces filtres sont disponibles en tant qu'options prédéfinies dans la liste de filtres.
1. **Autres (= filtres personnalisés)**.  
   Vous pouvez définir des règles personnalisées pour exclure ou inclure des types de fichiers, dossiers ou chemins spécifiques.  
   Voici quelques exemples courants :  
   **`.iso`** : Exclut tous les fichiers .iso.  
   **`/.git/*`** : Exclut uniquement les fichiers à l'intérieur du dossier .git à la racine, pas les sous-dossiers.  
   **`/.git/`** : Exclut l'intégralité du dossier .git à la racine, y compris tout son contenu.   
   **`.git/`** : Exclut tous les dossiers .git et leur contenu, quel que soit leur emplacement.   
   
   🔗 Pour des exemples et une syntaxe plus avancés, consultez le [guide de filtrage Rclone](https://rclone.org/filtering/#exclude-exclude-files-matching-pattern)


</details>

  
  
### Étape 4 : Lancer la synchronisation

- Une fois tous les paramètres définis, cliquez sur **Run** pour démarrer le processus de synchronisation.

:::important Planification de la synchronisation. 
Pour exécuter des tâches de synchronisation à une date et une heure planifiées, commencez par **Save to Jobs** pour enregistrer la tâche de synchronisation en tant que Job. Ensuite, lancez le **`Job Manager`** pour configurer la planification.  

> ⚠️ **La planification des Jobs est une fonctionnalité PLUS.**   

Vous devrez acheter une [**licence PLUS**](https://rcloneview.com/src/pricing.html) pour activer cette fonctionnalité.
:::

### Simuler : lancer un dry run (optionnel)

Vous pouvez lancer un **Dry run** pour simuler l'opération de synchronisation sans effectuer de modification réelle.

- Cet aperçu montre quels fichiers seront copiés vers la **Destination** et lesquels seront supprimés.
- Cliquez sur **`See details`** pour afficher la liste complète des opérations qui se produiraient (par exemple, copie, création, suppression) dans la destination.

<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-basic/sync-dry-run.png" alt="sync dry run" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/sync-dry-run-details.png" alt="sync dry run details" class="img-medium img-center" />
</div>

## Surveiller les résultats de synchronisation

Vous pouvez suivre en temps réel la progression et les résultats des opérations de synchronisation.

### Statut du transfert (en cours)

- Pendant la synchronisation, ouvrez l'onglet **`Transfer`** pour voir la progression en temps réel de chaque fichier.
- Cliquez sur l'icône **+** pour développer et suivre les transferts de fichiers individuels.
<img src="/support/images/en/howto/rcloneview-basic/sync-transfer-window.png" alt="sync transfer window" class="img-medium img-center" />

### Jobs terminés (après la synchronisation)

- Une fois la synchronisation terminée, accédez à l'onglet **`Completed`** pour consulter les résultats.
- Cliquez sur l'icône **+** pour voir les détails au niveau des fichiers de chaque Job terminé.
<img src="/support/images/en/howto/rcloneview-basic/sync-completed-window.png" alt="sync completed window" class="img-medium img-center" />
:::tip Ouvrir rapidement les distants synchronisés
Dans l'onglet **`Completed`**, vous pouvez double-cliquer sur n'importe quel Job terminé pour ouvrir à la fois les dossiers source et destination dans le panneau Explorer.  
Cela permet de revoir facilement et immédiatement les dossiers synchronisés.
:::

### Alarme de notification de fin (Windows)

Une fois la synchronisation terminée, une fenêtre de notification apparaît dans la barre d'état système Windows, affichant un résumé de l'opération de synchronisation.

  - Vous pouvez cliquer sur **`See details`** pour afficher le détail complet des résultats.
<img src="/support/images/en/howto/rcloneview-basic/sync-completed-windows-alarm.png" alt="sync completed windows alarm" class="img-medium img-center" />
:::tip Consulter les messages d'alarme sur la notification Windows
Si vous manquez la fenêtre de notification, vous pouvez toujours consulter l'alerte de synchronisation en cliquant sur l'**icône de notification** dans la **barre d'état système Windows**.
<img src="/support/images/en/howto/rcloneview-basic/click-windows-alarm-notification.png" alt="click windows alarm notification" class="img-small img-left" />
:::



## Enregistrer l'opération de synchronisation en tant que Job

Si vous effectuez régulièrement la même tâche de synchronisation, vous pouvez l'enregistrer en tant que **Job** pour la réutiliser facilement.

- Cliquez sur **`Save to Jobs`** après avoir configuré votre synchronisation.
- Saisissez un **nom de Job**, puis cliquez sur **Save** pour enregistrer le Job.  
  - ❗Caractères autorisés : `a–z`, `A–Z`, `0–9`, `-`, `_`, `.`
- Vous pourrez ensuite exécuter le Job enregistré depuis le **`Job Manager`** en un clic.

<img src="/support/images/en/howto/rcloneview-basic/save-sync-to-jobs.png" alt="save sync to jobs" class="img-medium img-center" />
Vous pouvez consulter et exécuter les Jobs enregistrés en cliquant sur la barre d'outils **`Job Manager`** dans le menu Home.
<img src="/support/images/en/howto/rcloneview-basic/verify-job-in-job-manager.png" alt="verify job in job manager" class="img-medium img-center" />
