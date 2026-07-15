---
sidebar_position: 15
description: "Comprenda los Remotos Virtuales en RcloneView y aprenda a agregar capas virtuales como Alias, Crypt, Combine, Union y otras para flujos de trabajo en la nube más rápidos y seguros."
keywords:
  - rcloneview
  - remoto virtual
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

# Descripción general y configuración de los Remotos Virtuales

Los Remotos Virtuales agregan capas funcionales sobre remotos en la nube existentes. No almacenan datos por sí mismos; en cambio, hacen que tus remotos actuales sean más convenientes, rápidos, seguros o flexibles.

---

## ¿Qué es un Remoto Virtual?

Un Remoto Virtual es una capa de funciones que:

- Extiende remotos existentes sin mover datos.
- Mantiene el almacenamiento en el remoto original mientras agrega conveniencia.
- Ayuda con acceso más rápido, privacidad o vistas unificadas.

---

## Tipos de Remotos Virtuales

RcloneView ofrece nueve tipos de Remotos Virtuales:

1. **Alias**  
   Atajo para saltar directamente a una carpeta específica en la nube.  
   Ejemplo: guardar como marcador una ruta profunda de Google Drive para acceso instantáneo.  
   👉 Ver: [Guía del remoto Alias](/howto/remote-storage-connection-settings/alias-remote)

2. **Crypt**  
   Cifra nombres de archivo, contenidos y carpetas para privacidad.  
   👉 Ver: [Guía del remoto Crypt](/howto/remote-storage-connection-settings/crypt-remote)

3. **Memory**  
   Almacena datos en RAM para uso temporal ultrarrápido; se borra al cerrar.

4. **Cache**  
   Acelera remotos lentos mediante almacenamiento en caché; lecturas repetidas y transmisión más rápidas.

5. **Chunker**  
   Divide archivos grandes en fragmentos para superar los límites de tamaño del servicio y mejorar la estabilidad.

6. **Combine**  
   Muestra múltiples carpetas bajo un remoto como subcarpetas separadas.  
   👉 Ver: [Guía del remoto Combine](/howto/remote-storage-connection-settings/combine-remote)

7. **Union**  
   Fusiona múltiples carpetas en una vista unificada.  
   👉 Ver: [Guía del remoto Union](/howto/remote-storage-connection-settings/union-remote)

8. **Hasher**  
   Agrega hashing donde el backend carece de él; útil para verificaciones de integridad.

9. **Compress**  
   Comprime archivos antes de subirlos para ahorrar espacio.

---

## Cómo agregar un Remoto Virtual

Todos los Remotos Virtuales se crean desde **New Remote > Virtual**.

<img src="/support/images/en/howto/remote-storage-connection-settings/add-remote-virtual.png" alt="add virtual remote" class="img-large img-center" />

### Paso 1 — Abrir New Remote

- Desde el menú superior: **`Remote` > `New Remote`**.
- Elige la pestaña **`Virtual`** para ver todos los tipos de Remotos Virtuales.

### Paso 2 — Elegir el tipo de Remoto Virtual

Cada tipo tiene sus propios campos requeridos. Ejemplos:

- **Alias**: nombre + carpeta de destino.
- **Crypt**: contraseña de cifrado + carpeta de destino.
- **Union**: múltiples orígenes `Remote:Path`.
- **Combine**: etiquetas de directorio + lista de rutas de remotos.
- **Chunker**: remoto de origen + configuración de fragmentos.

RcloneView te guía a través de las entradas requeridas para cada tipo.

### Paso 3 — Usar el Remoto Virtual

Después de la creación, el Remoto Virtual aparece igual que cualquier remoto en:

- **Remote Manager**
- El explorador de archivos **Explorer**
- Los diálogos de **Sync / Compare / Job**

Recuerda: los Remotos Virtuales son capas de funciones. Los archivos reales permanecen en las rutas de los remotos subyacentes.

---

## Cuándo usar los Remotos Virtuales

| Necesidad                                | Remoto Virtual recomendado |
| ----------------------------------------- | --------------------------- |
| Reforzar la seguridad en la nube          | Crypt                       |
| Ver múltiples carpetas juntas             | Union                       |
| Guardar marcadores u organizar rutas complejas | Alias                   |
| Organizar proyectos complejos             | Combine                     |
| Subir archivos muy grandes                | Chunker                     |
| Acelerar lecturas repetidas               | Cache                       |
| Verificar la integridad de los datos      | Hasher                      |
| Ahorrar almacenamiento con compresión     | Compress                    |

---

## Referencia rápida

| Remoto Virtual | Función                                        |
| --------------- | ----------------------------------------------- |
| Alias           | Atajo de carpeta                                 |
| Crypt           | Almacenamiento cifrado                           |
| Memory          | Almacenamiento temporal basado en RAM            |
| Cache           | Aumento de velocidad mediante caché              |
| Chunker         | Fragmentar archivos grandes para la subida       |
| Combine         | Agrupar múltiples carpetas como vistas separadas |
| Union           | Fusionar múltiples carpetas en una sola vista    |
| Hasher          | Agregar hashing para verificaciones de integridad |
| Compress        | Comprimir archivos antes de subirlos             |

Los Remotos Virtuales hacen que los flujos de trabajo en la nube sean más potentes y flexibles. En RcloneView, puedes habilitar estas capacidades con solo unos clics, sin necesidad de una configuración complicada.
