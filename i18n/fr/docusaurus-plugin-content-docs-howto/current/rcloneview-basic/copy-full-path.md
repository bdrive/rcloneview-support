---
sidebar_position: 14
description: "Copiez des chemins de dossier complets — y compris le nom du distant — en une seule étape depuis la barre de chemin de RcloneView, pour des commandes précises et l'automatisation."
keywords:
  - rcloneview
  - rclone
  - copie de chemin
  - chemin distant
  - barre de chemin
  - automatisation
  - terminal
tags:
  - RcloneView
  - path-bar
  - copy-path
  - rclone
date: 2025-12-05
author: tayson
---

# Utiliser la fonctionnalité Copier le chemin complet dans RcloneView

La fonctionnalité **Copier le chemin complet** vous permet de récupérer l'intégralité du chemin d'un dossier — éventuellement avec le nom du distant — en une seule action. Elle est parfaite pour écrire des commandes `rclone`, effectuer des tests dans le Terminal, partager des chemins cloud exacts et éviter les erreurs dans les scripts.

---

## Où trouver Copier le chemin complet

Vous pouvez accéder à Copier le chemin complet depuis la **barre de chemin** en haut du Navigateur de fichiers distants.  
<img src="/support/images/en/howto/rcloneview-basic/copy-full-path/copy-full-path.png" alt="copy full path path bar" class="img-medium img-center" />

Faites un clic droit sur la barre de chemin pour voir ces options :

- **Couper**
- **Copier**
- **Coller**
- **Copier le chemin complet (avec le distant)**
- **Tout sélectionner**

<img src="/support/images/en/howto/rcloneview-basic/copy-full-path/copy-full-path-all.png" alt="copy full path context menu" class="img-medium img-center" />

---

## Tout sélectionner — Surligner le chemin entier

Choisir **Tout sélectionner** met en surbrillance tout le texte du champ Chemin afin que vous puissiez le copier rapidement.  
<img src="/support/images/en/howto/rcloneview-basic/copy-full-path/copy-full-path-select-all.png" alt="copy full path select all" class="img-medium img-center" />

Après avoir copié puis collé (par exemple dans le Bloc-notes), le nom du dossier local (par exemple `Meet recordings`) apparaît exactement tel qu'il est affiché.  
<img src="/support/images/en/howto/rcloneview-basic/copy-full-path/copy-full-path-select-copy-notepad.png" alt="copy full path notepad" class="img-medium img-center" />

---

## Copier le chemin complet (avec le distant) — Distant + chemin du dossier

**Copier le chemin complet (avec le distant)** capture :

- Le nom du distant
- Le chemin complet du dossier
- Le format exact `remote:path` pour `rclone`

Exemple de résultat :

```
mygoogledrive:Meet recordings
```

<img src="/support/images/en/howto/rcloneview-basic/copy-full-path/copy-full-path-select-copy-full-path.png" alt="copy full path with remote" class="img-medium img-center" />

Coller dans le Bloc-notes affiche le chemin prêt à l'emploi :  
<img src="/support/images/en/howto/rcloneview-basic/copy-full-path/copy-full-path-select-copy-full-path-notepad.png" alt="copy full path with remote notepad" class="img-medium img-center" />

Ce format fonctionne directement dans des commandes telles que :

```bash
rclone copy "mygoogledrive:Meet recordings" /local/backup
```

---

## Quand utiliser cette fonctionnalité

- **Écrire des commandes `rclone`** : collez instantanément des chemins distants précis.
- **Tester des chemins dans le Terminal** : utilisez `remote:path` sans avoir à le retaper.
- **Éviter les erreurs de script** : évitez les fautes de frappe dans l'automatisation ou les tâches batch.
- **Partager des chemins avec des collègues** : envoyez des emplacements précis pour le support ou la collaboration.

---

## Référence rapide

| Action                                        | Ce que ça fait                                     |
| ---------------------------------------------- | --------------------------------------------------- |
| **Copier**                                     | Copie le texte sélectionné dans la barre de chemin  |
| **Tout sélectionner**                          | Sélectionne tout le texte du chemin                 |
| **Copier le chemin complet (avec le distant)** | Copie le format `remote:path` (recommandé)          |
| **Coller**                                     | Insère le texte du presse-papiers dans la barre de chemin |

La fonctionnalité Copier le chemin complet paraît simple, mais pour l'automatisation, les scripts et les transferts précis, c'est l'un des boosters de productivité les plus rapides de RcloneView.
