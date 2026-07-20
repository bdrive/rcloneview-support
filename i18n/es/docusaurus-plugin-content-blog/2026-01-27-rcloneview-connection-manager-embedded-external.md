---
slug: rcloneview-connection-manager-embedded-external
title: "Gestor de Conexiones de RcloneView: cambia entre rclone Integrado y Externo para operaciones en la nube más seguras"
authors:
  - tayson
description: "Usa el Gestor de Conexiones de RcloneView para alternar entre instancias de rclone Integradas y Externas, aislar entornos y ejecutar flujos de trabajo más seguros y auditables."
keywords:
  - gestor de conexiones rcloneview
  - rclone integrado
  - rclone externo
  - rclone rcd gui
  - control remoto rcloneview
  - cambio de instancia rclone
  - gui de automatización en la nube
  - flujo de trabajo rcloneview
  - gui de rclone
  - rcloneview enterprise
tags:
  - RcloneView
  - cloud-storage
  - sync
  - file-management
  - job-management
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gestor de Conexiones de RcloneView: cambia entre rclone Integrado y Externo para operaciones en la nube más seguras

> ¿Necesitas una separación clara entre trabajos personales, datos de producción y entornos de prueba? El Gestor de Conexiones de RcloneView te permite cambiar de instancia de rclone en segundos, sin riesgo de CLI.

RcloneView incluye un motor de rclone Integrado, pero también se conecta a instancias de rclone Externas (local, remota o en contenedor). Esto te ofrece una forma segura de aislar entornos, probar cambios y operar a escala empresarial sin reescribir configuraciones ni hacer malabares con terminales.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Por qué importa el Gestor de Conexiones

La mayoría de los usuarios de rclone terminan enfrentando uno de estos problemas:

- Una prueba altera remotos de producción
- Una máquina necesita credenciales distintas a otra
- Quieres que un servidor remoto haga las transferencias mientras tu PC se mantiene limpio

El Gestor de Conexiones resuelve esto permitiéndote cambiar entre instancias de rclone **Integradas** y **Externas** con un solo clic.

## rclone Integrado vs Externo (modelo mental rápido)

- **rclone Integrado**: incluido, local y siempre disponible
- **rclone Externo**: gestionado por el usuario, puede ejecutarse en un servidor, NAS o máquina separada

Esta es la base de los flujos de trabajo seguros: aislar entornos en lugar de mezclarlos.

<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-advanced/embedded-rclone-model.png" alt="Embedded rclone model" class="img-large img-center" />
<img src="/support/images/en/howto/rcloneview-advanced/external-rclone-model.png" alt="External rclone model" class="img-large img-center" />
</div>

## Qué hace el Gestor de Conexiones

El Gestor de Conexiones te permite:

- Ver todas las instancias de rclone disponibles
- Conectarte a una a la vez
- Alternar entre Integrado y Externo al instante
- Mantener las configuraciones aisladas por instancia

<img src="/support/images/en/howto/rcloneview-basic/connection-manager-with-embedded-rclone-only.png" alt="Connection Manager with embedded rclone" class="img-large img-center" />

## Por qué es un flujo de trabajo de alto valor para equipos

### 1) Pruebas y validación más seguras

Usa una instancia externa para probar cambios sin tocar los remotos de producción.

### 2) Separación limpia de entornos

Ejecuta una instancia para staging y otra para producción. Sin configuraciones mezcladas.

### 3) Cómputo remoto para transferencias pesadas

Deja que un servidor o NAS gestione las transferencias grandes mientras tu escritorio se mantiene ligero.

### 4) Recuperación más rápida ante errores

Si una instancia externa falla o se comporta mal, vuelve a la instancia Integrada al instante.

## Paso a paso: añadir una conexión de rclone Externo

1) Abre **Settings -> Connection Manager**.
2) Haz clic en **New Connection**.
3) Introduce la dirección remota para `rclone rcd`.

<img src="/support/images/en/howto/rcloneview-basic/new-connection-form.png" alt="New connection form" class="img-large img-center" />

Una vez añadida, puedes conectar, editar o eliminar la entrada.

<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-basic/external-rclone-added.png" alt="External rclone added" class="img-large img-center" />
<img src="/support/images/en/howto/rcloneview-basic/external-rclone-selected.png" alt="External rclone selected" class="img-large img-center" />
</div>

Guía: [/support/howto/rcloneview-basic/connection-manager](/howto/rcloneview-basic/connection-manager)

## Casos de uso típicos

### Aislamiento personal vs empresarial

Mantén los remotos personales en Integrado y los remotos empresariales en Externo.

### Transferencias del lado del servidor

Ejecuta rclone en un servidor (EC2, NAS o Docker). Usa RcloneView como el controlador de interfaz.

### Operaciones multiventana

Abre una nueva ventana de RcloneView para gestionar otra instancia sin cambiar de contexto.

<img src="/support/images/en/howto/rcloneview-advanced/rcloneview-new-window.png" alt="Open new RcloneView window" class="img-large img-center" />

## Buenas prácticas para flujos de trabajo confiables

- Nombra las instancias externas con claridad (por ejemplo, `Prod-Rclone`, `Lab-Rclone`).
- Mantén los horarios de trabajos vinculados a la instancia correcta.
- Usa Comparar antes de Sincronizar al cambiar de entorno.
- Documenta qué remotos viven en cada instancia.

## Errores comunes que evitar

- Ejecutar trabajos de producción en una instancia de prueba
- Compartir una instancia externa entre equipos no relacionados
- Olvidar cuál instancia está activa actualmente

El Gestor de Conexiones corrige la mayoría de estos problemas con contexto visual y cambio rápido.

## Conclusión

El Gestor de Conexiones de RcloneView convierte a rclone en un sistema seguro y multientorno. Integrado es perfecto para el uso diario. Externo es ideal para el aislamiento, las transferencias del lado del servidor y los flujos de trabajo empresariales. Cambia según lo necesites y mantén las operaciones limpias.

<CloudSupportGrid />
