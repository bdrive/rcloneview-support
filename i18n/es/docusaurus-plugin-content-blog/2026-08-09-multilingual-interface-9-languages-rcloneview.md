---
slug: multilingual-interface-9-languages-rcloneview
title: "Interfaz multilingüe — Usa RcloneView en 9 idiomas"
authors:
  - casey
description: "RcloneView incluye 9 idiomas de interfaz, con soporte CJK, para que los flujos de sincronización y montaje en la nube se lean con naturalidad en equipos globales."
keywords:
  - configuración de idioma de RcloneView
  - interfaz multilingüe de RcloneView
  - idiomas de aplicación de almacenamiento en la nube
  - RcloneView coreano japonés chino
  - cambiar idioma de RcloneView
  - herramienta de sincronización en la nube localizada
  - soporte Noto Sans CJK
  - GUI de almacenamiento en la nube internacional
  - configuración de interfaz de RcloneView
tags:
  - RcloneView
  - feature
  - tips
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Interfaz multilingüe — Usa RcloneView en 9 idiomas

> Una herramienta de sincronización en la nube solo es tan útil como el equipo que realmente puede leerla — la interfaz de RcloneView se adapta a 9 idiomas de fábrica.

Implementar una herramienta de gestión de archivos en un equipo distribuido suele significar que alguien del equipo termina leyendo menús en un idioma con el que no está cómodo. RcloneView evita esto ofreciendo traducciones completas de la interfaz en lugar de depender de la traducción automática del navegador o de una versión disponible solo en inglés. Ya sea que tu equipo esté repartido entre Seúl, París o São Paulo, el asistente de sincronización, la configuración de montaje y el Job Manager se leen en el idioma local. RcloneView monta Y sincroniza más de 90 proveedores desde una sola ventana, en Windows, macOS y Linux — y ahora también en el idioma que tu equipo realmente habla.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Idiomas compatibles

RcloneView actualmente admite inglés, coreano, francés, alemán, chino simplificado, chino tradicional, japonés, español e indonesio. No se trata de una capa de traducción parcial sobre un puñado de menús — las etiquetas de Remote Manager, la configuración de Sync, Folder Compare y Settings están completamente localizadas, de modo que los usuarios que no hablan inglés no se quedan adivinando diálogos traducidos a medias en medio de su flujo de trabajo.

Específicamente para los idiomas CJK, la aplicación incluye variantes de la fuente Noto Sans (coreano, chino simplificado, chino tradicional, japonés), lo que evita el problema de renderizado en "cajas de tofu" que afecta a las aplicaciones que dependen de fuentes del sistema que pueden no incluir el conjunto de caracteres adecuado.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Interfaz de RcloneView mostrando opciones de menú localizadas" class="img-large img-center" />

## Cambiar de idioma

La selección de idioma se encuentra en la pestaña Settings > General > Language. Elige tu idioma preferido en el menú desplegable y la interfaz se actualiza de inmediato — no es necesario reiniciar. Esto facilita que un técnico de soporte en una región cambie temporalmente la sesión de un compañero a su propio idioma mientras revisan juntos una configuración de montaje o sincronización, y luego la vuelva a cambiar.

Como esta configuración es por instalación y no está vinculada a una cuenta en la nube, cada miembro del equipo puede ejecutar RcloneView en el idioma con el que se sienta más cómodo, incluso cuando todos se conectan a los mismos remotos compartidos.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuración de una transferencia de nube a nube con una interfaz localizada" class="img-large img-center" />

## Por qué es importante para equipos multirregionales

Los trabajos de sincronización, las reglas de filtrado y las configuraciones de montaje ya implican suficiente detalle técnico por sí solos — añadir una barrera de idioma encima aumenta la probabilidad de un filtro mal configurado o una dirección de sincronización incorrecta. Una interfaz correctamente localizada permite que un equipo de operaciones en Tokio y un administrador de TI en Berlín lean exactamente la misma configuración de sincronización, "Modifying destination only" frente a "Bidirection", correctamente y en su propio idioma, antes de ejecutar un trabajo que afecta archivos de producción.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Ejecutando un trabajo de sincronización desde una interfaz localizada de RcloneView" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Abre la pestaña Settings > General > Language.
3. Selecciona tu idioma preferido entre las 9 opciones disponibles.
4. Continúa configurando remotos, trabajos de sincronización o montajes — toda la interfaz seguirá tu selección.

Una herramienta que todo el equipo puede leer realmente con comodidad es una que configurarán correctamente desde la primera vez.

---

**Guías relacionadas:**

- [Atajos de teclado y consejos de productividad en RcloneView](https://rcloneview.com/support/blog/keyboard-shortcuts-productivity-rcloneview)
- [Modo oscuro y personalización de temas en RcloneView](https://rcloneview.com/support/blog/dark-mode-themes-customization-rcloneview)
- [Terminal de RcloneView — Flujo de trabajo GUI y CLI juntos](https://rcloneview.com/support/blog/rcloneview-terminal-gui-workflow)

<CloudSupportGrid />
