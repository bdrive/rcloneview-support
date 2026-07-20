---
sidebar_position: 2
description: "Ajoutez un distant Crypt dans RcloneView pour chiffrer les fichiers et les noms de fichiers au-dessus d'un distant cloud existant, tout en gardant l'accès dans l'application."
keywords:
  - rcloneview
  - crypt
  - distant virtuel
  - distant chiffré
  - chiffrement cloud
  - gestionnaire de distants
  - confidentialité
tags:
  - RcloneView
  - crypt
  - remote-storage
  - encryption
  - virtual-remote
date: 2025-12-08
author: tayson
---

# Crypt

## Comment ajouter Crypt avec RcloneView

Un **distant Crypt** ajoute une couche de chiffrement au-dessus d'un distant cloud existant (Google Drive, OneDrive, etc.).  
Les fichiers restent stockés sur le distant d'origine, tandis que le distant Crypt gère le chiffrement et le déchiffrement.

Pourquoi c'est utile :

- Empêche les fournisseurs de voir le contenu des fichiers.
- Peut également chiffrer les noms de fichiers pour une confidentialité totale.
- Le déchiffrement se fait automatiquement dans RcloneView.
- Idéal pour les sauvegardes sensibles.

---

## Pourquoi un distant Crypt peut sembler vide

Les utilisateurs s'attendent souvent à voir leurs fichiers en clair dans un distant Crypt. Or :

- Crypt n'affiche que les fichiers **chiffrés**.
- Les fichiers en clair présents dans le distant sous-jacent ne sont **pas** affichés dans la vue Crypt (c'est normal).

Exemple :

- `mygoogledrive:Meet Recordings` contient des fichiers en clair.
- `MyCryptGoogle:` encapsule le même dossier avec Crypt.
- Dans le distant Crypt, il apparaît vide — c'est le comportement attendu.

Lorsque vous téléversez **via Crypt**, les fichiers sont stockés chiffrés, donc :

- Ils apparaissent normalement (déchiffrés) dans le distant Crypt.
- Ils apparaissent avec des noms chiffrés dans le distant d'origine.

---

## Créer un distant Crypt via Nouveau distant

### Étape 1 — Ouvrez **Nouveau distant** → **Virtuel** → **Crypt**

<img src="/support/images/en/howto/remote-storage-connection-settings/crypt/new-remote-add-crypt.png" alt="new remote add crypt" class="img-large img-center" />

### Étape 2 — Saisissez les détails de Crypt

Champs requis :

- **Nom du distant** : nom du distant Crypt (par exemple, `MyCryptGoogle`).
- **Distant (dossier à chiffrer)** : cliquez sur le sélecteur de dossier pour choisir le distant et le dossier existants à protéger.

<img src="/support/images/en/howto/remote-storage-connection-settings/crypt/virtual-add-select-remote-and-folder.png" alt="select target remote and folder for crypt" class="img-large img-center" />

Après la sélection, vérifiez les paramètres et cliquez sur **Ajouter le distant**.  
<img src="/support/images/en/howto/remote-storage-connection-settings/crypt/virtual-add-crypt-input.png" alt="crypt input window" class="img-large img-center" />

### Étape 3 — Confirmez dans le gestionnaire de distants

<img src="/support/images/en/howto/remote-storage-connection-settings/crypt/virtual-remote-manager-crypt.png" alt="remote manager crypt" class="img-large img-center" />

---

## Téléverser et afficher des fichiers dans un distant Crypt

Lorsque vous téléversez via le distant Crypt :

- Les fichiers sont **chiffrés lors du téléversement**.
- La vue Crypt affiche des **noms déchiffrés** pour plus de commodité.
- Le distant sous-jacent affiche des **noms de fichiers chiffrés**.

Exemple de comparaison :  
<img src="/support/images/en/howto/remote-storage-connection-settings/crypt/crypt-upload-file-compare.png" alt="crypt upload file compare" class="img-large img-center" />

| Emplacement de la vue           | Ce que vous voyez                       |
| -------------------------------- | ---------------------------------------- |
| `MyCryptGoogle:`                 | Noms de fichiers en clair (déchiffrés)  |
| `mygoogledrive:Meet Recordings`  | Noms de fichiers chiffrés (attendu)     |

---

## Pourquoi utiliser un distant Crypt

- Les fournisseurs cloud ne peuvent pas lire le contenu des fichiers.
- Les noms de fichiers peuvent être chiffrés pour une confidentialité totale.
- Le déchiffrement automatique dans RcloneView simplifie l'utilisation.
- Idéal pour les sauvegardes sécurisées, les documents sensibles et les lecteurs partagés.
- Combinez avec le planificateur pour des sauvegardes chiffrées automatisées.

---

## Résumé

| Fonctionnalité                    | Description                                            |
| ---------------------------------- | ------------------------------------------------------- |
| **Distant Crypt**                  | Couche de chiffrement au-dessus d'un distant existant   |
| **Visibilité des fichiers en clair** | Les fichiers en clair sont masqués dans la vue Crypt (normal) |
| **Téléversements via Crypt**       | Stockés chiffrés ; visibles déchiffrés dans la vue Crypt |
| **Objectif**                       | Sauvegardes cloud sécurisées et protection de la confidentialité |

