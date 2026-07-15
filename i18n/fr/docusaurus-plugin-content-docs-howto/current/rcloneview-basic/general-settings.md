---
sidebar_position: 10
description: "Découvrez comment configurer les préférences générales, la disposition de l'interface, les notifications et les paramètres Rclone intégrés dans RcloneView."
keywords:
  - rcloneview
  - rclone
  - paramètres rcloneview
  - préférences générales
  - mode sombre
  - journal rclone
  - configurations rclone
tags:
  - RcloneView
  - settings
  - configuration
  - preferences
date: 2025-06-22
author: Jay
---
# Paramètres généraux

Le menu **Paramètres** de RcloneView est divisé en quatre onglets pour plus de clarté et de personnalisation :

- **Général**
- **Interfaces et notifications**
- **Rclone intégré**
- **Réseau et divers**

Chaque onglet vous permet de configurer différentes parties de l'application. Voici un aperçu de chaque section.

---

## 🛠 Général

<img src="/support/images/en/howto/rcloneview-basic/general-settings.png" alt="general settings" class="img-medium img-center" />
### Langue

- **Langue** : Choisissez votre langue d'interface préférée dans le menu déroulant.

### Comportement au démarrage

- **Lancer à la connexion** : Démarre automatiquement RcloneView lorsque vous vous connectez à votre système.

:::important Démarrage automatique : planification et montage

Lorsque **Lancer à la connexion** est activé :  

- Toute tâche planifiée définie dans le [**Planificateur de tâches**](/howto/rcloneview-advanced/job-scheduling-and-execution) s'exécutera automatiquement lors de la connexion.  
- Tout distant configuré pour le montage automatique dans le [**Gestionnaire de montage**](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive#method-1-mount-from-remote-explorer) sera monté automatiquement au démarrage de RcloneView.  
:::

- **Démarrer réduit** : Lance RcloneView dans la barre d'état système.

- **Détection automatique du NAS Synology** : Analyse automatiquement le réseau local à la recherche d'appareils NAS Synology.

### Réinitialisation

- **Restaurer les paramètres par défaut** : Réinitialise toutes les options à leurs valeurs par défaut d'origine.

---

## 🎛  Interfaces et notifications

<img src="/support/images/en/howto/rcloneview-basic/interface-settings.png" alt="interface settings" class="img-medium img-center" />
### Apparence de l'interface

- **Mode sombre** : Basculez entre les thèmes clair et sombre.
- **Couleur du thème** : Choisissez parmi les couleurs d'accentuation disponibles.

### Glisser-déposer

- **Confirmer le glisser-déposer** : Active une fenêtre de confirmation lors du déplacement de fichiers par glisser-déposer.

### Afficher les types de tâches (filtres du journal des transferts)

Sélectionnez les types de tâches à afficher dans le panneau du journal des transferts :
- **Téléchargement (download)**
- **Envoi (upload)**
- **Synchronisation**

<img src="/support/images/en/howto/rcloneview-basic/notification-dialogs-settings.png" alt="notification dialogs settings" class="img-medium img-center" />
### Fenêtres de notification

Décidez quels types de notifications contextuelles vous souhaitez recevoir lors de l'utilisation de RcloneView :

- **Afficher le journal d'état des tâches** : Affiche une fenêtre de journal détaillée à la fin de chaque tâche de transfert.
- **Afficher la comparaison terminée** : Notifie lorsqu'une tâche de comparaison de dossiers s'est terminée avec succès.
- **Afficher la confirmation avant suppression de fichiers lors de la comparaison** : Demande confirmation avant de supprimer des fichiers pendant une comparaison de dossiers.
- **Afficher la notification de fin de synchronisation** : Affiche un message lorsqu'une opération de synchronisation se termine.
- **Afficher la fenêtre d'erreur réseau** : Vous alerte immédiatement en cas d'erreur de connexion réseau pendant une tâche.

---

## ⚙️ Rclone intégré

<img src="/support/images/en/howto/rcloneview-basic/embedded-rclone-settings.png" alt="embedded rclone settings" class="img-medium img-center" />

### Cycle de vie intégré

- **Arrêter rclone à la fermeture de l'application** : Arrête automatiquement le processus `rclone` intégré à la fermeture de RcloneView.

:::caution Redémarrage requis après toute modification

Après avoir modifié un paramètre dans l'onglet **Rclone intégré** — y compris la configuration des chemins, les indicateurs globaux ou les options de journalisation — cliquez sur **Redémarrer Rclone intégré** pour appliquer les modifications.  
Cela redémarrera le processus Rclone intégré et pourrait interrompre les tâches en cours d'exécution.

:::
### Paramètres de chemin

- **Emplacement local de Rclone** : Chemin absolu vers votre exécutable `rclone`.
- **Emplacement local de la configuration Rclone** : Chemin vers votre fichier `rclone.conf` (contient les informations des distants).
- **Dossier de téléchargement par défaut** : Répertoire où les fichiers téléchargés seront enregistrés.
- **Dossier d'envoi par défaut** : Répertoire utilisé comme source pour les tâches d'envoi.

   <img src="/support/images/en/howto/rcloneview-basic/embedded-rclone-advanced-options-settings.png" alt="embedded rclone advanced options settings" class="img-medium img-center" />
### Options avancées

- **Indicateurs globaux Rclone** : Indicateurs supplémentaires à transmettre à rclone (par exemple, `--s3-directory-markers`).
- **Mot de passe de configuration** : Mot de passe pour les configurations rclone chiffrées. Si vous définissez ce mot de passe, les fichiers de configuration rclone seront chiffrés.

<img src="/support/images/en/howto/rcloneview-basic/embedded-rclone-logging-configuration-settings.png" alt="embedded rclone logging configuration settings" class="img-medium img-center" />
### Configuration de la journalisation

- **Activer la journalisation rclone** : Active la journalisation basée sur fichier pour les opérations Rclone.
- **Dossier des journaux** : Répertoire de stockage des fichiers journaux.
- **Nom du fichier journal** : Nom de fichier par défaut pour les journaux.
- **Niveau de journalisation** : Choisissez le niveau de détail (DEBUG, INFO, NOTICE, ERROR).

---

## 🌐 Réseau et divers

<img src="/support/images/en/howto/rcloneview-basic/network-etc-settings.png" alt="network etc settings" class="img-medium img-center" />

### Réseau

- **Paramètres de proxy** : Configurez un proxy (fonctionnalité à venir).
- **Gestionnaire de connexions Rclone** : Affichez ou gérez les connexions Rclone actives.  
  → [En savoir plus](/howto/rcloneview-basic/connection-manager)

### Diagnostics

- **Journal de l'application** : Ouvre les journaux internes pour faciliter le dépannage ou le signalement de bugs.

---

## ✅ Résumé

Ces paramètres vous permettent de contrôler entièrement le comportement de RcloneView au démarrage, son interfaçage avec Rclone, et la façon dont il communique les résultats des tâches ou les erreurs. Ajustez-les selon votre flux de travail, que vous planifiiez des synchronisations, montiez automatiquement des lecteurs, ou dépanniez des problèmes réseau.
