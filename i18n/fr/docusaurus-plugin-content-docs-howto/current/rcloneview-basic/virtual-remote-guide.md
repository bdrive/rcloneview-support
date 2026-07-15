---
sidebar_position: 15
description: "Comprenez les Distants virtuels dans RcloneView et découvrez comment ajouter des couches virtuelles Alias, Crypt, Combine, Union et autres pour des workflows cloud plus rapides et plus sûrs."
keywords:
  - rcloneview
  - distant virtuel
  - alias
  - crypt
  - union
  - combine
  - cache
  - chunker
  - hasher
  - compress
tags:
  - RcloneView
  - virtual-remote
  - remote-storage
  - encryption
  - multi-cloud
date: 2025-12-08
author: tayson
---

# Présentation et configuration des Distants virtuels

Les Distants virtuels ajoutent des couches fonctionnelles au-dessus des distants cloud existants. Ils ne stockent pas de données eux-mêmes ; ils rendent plutôt vos distants actuels plus pratiques, plus rapides, plus sûrs ou plus flexibles.

---

## Qu'est-ce qu'un Distant virtuel ?

Un Distant virtuel est une couche de fonctionnalité qui :

- Étend les distants existants sans déplacer les données.
- Conserve le stockage dans le distant d'origine tout en ajoutant de la commodité.
- Facilite un accès plus rapide, la confidentialité ou des vues unifiées.

---

## Types de Distants virtuels

RcloneView propose neuf types de Distants virtuels :

1. **Alias**  
   Raccourci pour accéder directement à un dossier cloud spécifique.  
   Exemple : mettre en favori un chemin profond de Google Drive pour un accès instantané.  
   👉 Voir : [Guide du distant Alias](/howto/remote-storage-connection-settings/alias-remote)

2. **Crypt**  
   Chiffre les noms de fichiers, le contenu et les dossiers pour la confidentialité.  
   👉 Voir : [Guide du distant Crypt](/howto/remote-storage-connection-settings/crypt-remote)

3. **Memory**  
   Stocke les données en RAM pour une utilisation temporaire ultra-rapide ; efface les données à la fermeture.

4. **Cache**  
   Accélère les distants lents grâce à la mise en cache ; lectures répétées et streaming plus rapides.

5. **Chunker**  
   Découpe les fichiers volumineux en morceaux pour contourner les limites de taille des services et améliorer la stabilité.

6. **Combine**  
   Affiche plusieurs dossiers sous un seul distant en tant que sous-dossiers distincts.  
   👉 Voir : [Guide du distant Combine](/howto/remote-storage-connection-settings/combine-remote)

7. **Union**  
   Fusionne plusieurs dossiers en une seule vue unifiée.  
   👉 Voir : [Guide du distant Union](/howto/remote-storage-connection-settings/union-remote)

8. **Hasher**  
   Ajoute le hachage là où le backend en est dépourvu ; utile pour les contrôles d'intégrité.

9. **Compress**  
   Compresse les fichiers avant l'envoi pour économiser de l'espace.

---

## Comment ajouter un Distant virtuel

Tous les Distants virtuels sont créés depuis **New Remote > Virtual**.

<img src="/support/images/en/howto/remote-storage-connection-settings/add-remote-virtual.png" alt="add virtual remote" class="img-large img-center" />

### Étape 1 — Ouvrir New Remote

- Depuis le menu supérieur : **`Remote` > `New Remote`**.
- Choisissez l'onglet **`Virtual`** pour voir tous les types de Distants virtuels.

### Étape 2 — Choisir le type de Distant virtuel

Chaque type possède ses propres champs requis. Exemples :

- **Alias** : nom + dossier cible.
- **Crypt** : mot de passe de chiffrement + dossier cible.
- **Union** : plusieurs sources `Remote:Path`.
- **Combine** : libellés de répertoires + liste de chemins distants.
- **Chunker** : distant source + paramètres de découpage.

RcloneView vous guide à travers les saisies requises pour chaque type.

### Étape 3 — Utiliser le Distant virtuel

Après sa création, le Distant virtuel apparaît comme n'importe quel distant dans :

- **Remote Manager**
- L'explorateur de fichiers **Explorer**
- Les boîtes de dialogue **Sync / Compare / Job**

À retenir : les Distants virtuels sont des couches fonctionnelles. Les fichiers réels restent dans les chemins des distants sous-jacents.

---

## Quand utiliser les Distants virtuels

| Besoin                                    | Distant virtuel recommandé |
| ------------------------------------------ | --------------------------- |
| Renforcer la sécurité cloud                | Crypt                       |
| Visualiser plusieurs dossiers ensemble     | Union                       |
| Mettre en favori ou organiser des chemins complexes | Alias                |
| Organiser des projets complexes            | Combine                     |
| Envoyer des fichiers très volumineux       | Chunker                     |
| Accélérer les lectures répétées            | Cache                       |
| Vérifier l'intégrité des données           | Hasher                      |
| Économiser du stockage grâce à la compression | Compress                 |

---

## Référence rapide

| Distant virtuel | Rôle                                          |
| ---------------- | ---------------------------------------------- |
| Alias            | Raccourci de dossier                           |
| Crypt            | Stockage chiffré                               |
| Memory           | Stockage temporaire basé sur la RAM            |
| Cache            | Accélération grâce à la mise en cache          |
| Chunker          | Découpage des fichiers volumineux pour l'envoi |
| Combine          | Regrouper plusieurs dossiers en vues distinctes |
| Union            | Fusionner plusieurs dossiers en une seule vue  |
| Hasher           | Ajout du hachage pour les contrôles d'intégrité |
| Compress         | Compression des fichiers avant l'envoi         |

Les Distants virtuels rendent les workflows cloud plus puissants et plus flexibles. Dans RcloneView, vous pouvez activer ces fonctionnalités en quelques clics seulement, sans configuration compliquée.
