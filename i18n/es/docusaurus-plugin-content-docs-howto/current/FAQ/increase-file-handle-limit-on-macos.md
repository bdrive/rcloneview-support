---
sidebar_position: 1
description: Aprende a resolver los errores "Too many open files" en macOS aumentando el límite de descriptores de archivo para un funcionamiento más fluido de RcloneView.
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

# Aumentar el límite de descriptores de archivo en macOS

Al usar RcloneView para procesar una gran cantidad de archivos (por ejemplo, al sincronizar o copiar cientos de archivos simultáneamente), es posible que encuentres el siguiente error:

> **Too many open files**

Esto ocurre porque macOS impone un límite en la cantidad de descriptores de archivo (file handles) que un proceso puede abrir. Por defecto, este valor suele estar configurado en **256 o 1024**, lo cual puede resultar insuficiente para operaciones intensivas.

---

## 🔍 Cómo comprobar los límites actuales

### Comando de Terminal:

```bash
ulimit -n             # Current shell session soft limit
launchctl limit maxfiles  # System-wide soft and hard limits
```

---

## 🛠️ Configuración recomendada

- **Límite blando (Soft Limit):** 524288
- **Límite duro (Hard Limit):** 524288

Esta configuración admite trabajos en paralelo, el montaje de remotos y operaciones de sincronización de gran tamaño sin alcanzar los límites de descriptores de archivo.

---

## 📘 Paso a paso: aumento permanente del límite

### 1. Crear un archivo plist de LaunchDaemon

Abre Terminal y ejecuta:

```bash
sudo nano /Library/LaunchDaemons/limit.maxfiles.plist
```

Pega el siguiente contenido:

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

### 2. Establecer los permisos adecuados

```bash
sudo chmod 644 /Library/LaunchDaemons/limit.maxfiles.plist
```

### 3. Reiniciar tu Mac

```bash
sudo reboot
```

### 4. Confirmar los nuevos límites

```bash
launchctl limit maxfiles
```

---

## 📎 Recursos de referencia

- Comunidad de soporte de Apple: [Too many open files](https://discussions.apple.com/thread/1449787)
- Gist de ejemplo: [limit.maxfiles.plist configuration](https://gist.github.com/tombigel/d503800a282fcadbee14b537735d202c)
- Guía de blog: [Hiltmon - Increasing file descriptor ulimit on macOS](https://hiltmon.com/blog/2023/01/01/increasing-file-descriptor-ulimit-on-macos/)

---

Si tienes algún problema, contacta con soporte en **[rcloneview@bdrive.com](mailto:rcloneview@bdrive.com)**.
