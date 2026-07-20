---
sidebar_position: 1
description: "Découvrez comment résoudre les erreurs \"Too many open files\" sur macOS en augmentant la limite de descripteurs de fichiers pour un fonctionnement plus fluide de RcloneView."
keywords:
  - rcloneview
  - macos
  - file handle limit
  - rclone
  - plist
  - ulimit
tags:
  - RcloneView
  - macOS
  - Troubleshooting
  - FAQ
  - Performance
  - system-settings
date: 2025-07-25
author: Jay
---

# Augmenter la limite de descripteurs de fichiers sur macOS

Lorsque vous utilisez RcloneView pour traiter un grand nombre de fichiers (par exemple, synchroniser ou copier des centaines de fichiers simultanément), vous pouvez rencontrer l'erreur suivante :

> **Too many open files**

Cela se produit parce que macOS impose une limite au nombre de descripteurs de fichiers (file handles) qu'un processus peut ouvrir. Par défaut, cette valeur est souvent fixée à **256 ou 1024**, ce qui peut être insuffisant pour des opérations intensives.

---

## 🔍 Comment vérifier les limites actuelles

### Commande Terminal :

```bash
ulimit -n             # Current shell session soft limit
launchctl limit maxfiles  # System-wide soft and hard limits
```

---

## 🛠️ Configuration recommandée

- **Limite souple :** 524288
- **Limite stricte :** 524288

Cette configuration prend en charge les tâches parallèles, le montage de distants (remotes) et les opérations de synchronisation volumineuses sans atteindre les limites de descripteurs de fichiers.

---

## 📘 Étape par étape : augmentation permanente de la limite

### 1. Créer un fichier plist LaunchDaemon

Ouvrez le Terminal et exécutez :

```bash
sudo nano /Library/LaunchDaemons/limit.maxfiles.plist
```

Collez le contenu suivant :

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
   <key>Label</key>
   <string>limit.maxfiles</string>
   <key>ProgramArguments</key>
   <array>
       <string>launchctl</string>
       <string>limit</string>
       <string>maxfiles</string>
       <string>524288</string>
       <string>524288</string>
   </array>
   <key>RunAtLoad</key>
   <true/>
</dict>
</plist>
```

### 2. Définir les autorisations appropriées

```bash
sudo chmod 644 /Library/LaunchDaemons/limit.maxfiles.plist
```

### 3. Redémarrer votre Mac

```bash
sudo reboot
```

### 4. Confirmer les nouvelles limites

```bash
launchctl limit maxfiles
```

---

## 📎 Ressources de référence

- Communauté d'assistance Apple : [Too many open files](https://discussions.apple.com/thread/1449787)
- Exemple Gist : [limit.maxfiles.plist configuration](https://gist.github.com/tombigel/d503800a282fcadbee14b537735d202c)
- Guide de blog : [Hiltmon - Increasing file descriptor ulimit on macOS](https://hiltmon.com/blog/2023/01/01/increasing-file-descriptor-ulimit-on-macos/)

---

Pour tout problème, contactez le support à l'adresse **[rcloneview@bdrive.com](mailto:rcloneview@bdrive.com)**.
