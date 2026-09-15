---
slug: rcloneview-kali-linux-cloud-sync
title: "RcloneView en Kali Linux — Sincronización y copia de seguridad en la nube"
authors:
  - jay
description: "Instala RcloneView en Kali Linux para montar, sincronizar y respaldar más de 90 proveedores en la nube con un flujo de trabajo GUI seguro y auditable."
keywords:
  - RcloneView Kali Linux
  - cloud storage Kali Linux
  - install RcloneView Debian
  - cloud sync penetration testing
  - mount cloud drive Kali
  - rclone GUI Kali Linux
  - backup forensic evidence cloud
  - cloud backup security professionals
  - Kali Linux cloud storage GUI
tags:
  - RcloneView
  - linux
  - cloud-sync
  - installation
  - security
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView en Kali Linux — Sincronización y copia de seguridad en la nube

> Ejecuta un gestor de archivos multicloud gráfico en Kali Linux para sincronizar datos de proyectos, imágenes forenses y entregables de clientes sin tocar la CLI.

Kali Linux es una distribución basada en Debian creada para pruebas de penetración y análisis forense digital, y los equipos de seguridad que trabajan en Kali suelen necesitar mover grandes conjuntos de evidencia, capturas de paquetes o informes de clientes entre el almacenamiento local y las cuentas en la nube. RcloneView aporta un gestor de archivos gráfico a ese flujo de trabajo, permitiéndote explorar, sincronizar y montar almacenamiento en la nube desde el mismo escritorio donde ejecutas tus otras herramientas. Como Kali incluye un escritorio Xfce completo con X11, cumple con los requisitos de pantalla que RcloneView necesita para ejecutarse.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Instalar RcloneView en Kali Linux

Como Kali está basado en Debian, el paquete `.deb` oficial de [rcloneview.com](https://rcloneview.com/src/download.html) se instala igual que en Debian o Ubuntu — descarga el archivo `rclone_view-{version}-linux-{arch}.deb` e instálalo con `dpkg -i`, resolviendo cualquier dependencia faltante con `apt --fix-broken install`. Kali ofrece compilaciones `x86_64` directamente, y el formato `.AppImage` es una buena alternativa si prefieres no instalar un paquete a nivel de sistema, ya que se ejecuta directamente sin instalación.

RcloneView es una aplicación GUI basada en Flutter, no una herramienta de línea de comandos, por lo que requiere la sesión gráfica Xfce/X11 que Kali ejecuta por defecto — no se iniciará en una conexión SSH sin interfaz gráfica sin reenvío X11 o una sesión de escritorio remoto. También depende de GTK+3 y una biblioteca AppIndicator para su icono de bandeja del sistema, ambas presentes en una instalación de escritorio estándar de Kali.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new cloud remote in RcloneView on Kali Linux" class="img-large img-center" />

## Conectar almacenamiento en la nube para datos de proyectos

Una vez instalado, añade remotos a través del asistente New Remote en la pestaña Remote. Amazon S3, Cloudflare R2 y Backblaze B2 funcionan bien, mediante la introducción de clave de acceso y credenciales secretas, para almacenar grandes imágenes de disco forenses y capturas de paquetes, mientras que Google Drive, OneDrive o Box gestionan la entrega de informes de cara al cliente mediante inicio de sesión OAuth en el navegador. Las funciones de sincronización y Folder Compare de RcloneView están disponibles con la licencia FREE, por lo que puedes enviar la evidencia capturada al almacenamiento en la nube y verificar que llegó intacta sin pagar una actualización.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transferring files between cloud remotes in RcloneView on Kali" class="img-large img-center" />

## Sincronizar y verificar copias de seguridad de evidencia

Para flujos de trabajo de cadena de custodia, ejecuta un Dry Run antes de cualquier trabajo de sincronización para previsualizar exactamente qué archivos se copiarán o eliminarán, y luego usa Folder Compare para verificar que el origen y el destino coinciden después. La vista de comparación marca los archivos por diferencia de tamaño y muestra las coincidencias de archivos idénticos lado a lado, lo cual es útil cuando necesitas confirmar que una imagen forense se transfirió sin corrupción. Activa la comparación por checksum en el paso Advanced Settings del trabajo de sincronización para una verificación de integridad más sólida que una comprobación solo por tamaño.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder compare results view in RcloneView" class="img-large img-center" />

## Montar almacenamiento en la nube durante un proyecto

También puedes montar un remoto en la nube como unidad local usando Mount Manager, que se basa en FUSE y el método `nfsmount` en Linux — asegúrate de que `fuse3` esté instalado. Esto te permite abrir archivos de casos alojados en la nube directamente en tus otras herramientas de Kali sin un paso de descarga manual previo, con la opción de montar en modo solo lectura cuando quieras evitar escrituras accidentales en evidencia compartida.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mounting a cloud remote from the Mount Manager in RcloneView" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html) — obtén la compilación `.deb` o `.AppImage` para `x86_64`.
2. Instala con `dpkg -i` (o haz que el AppImage sea ejecutable y ejecútalo directamente).
3. Añade tus remotos en la nube a través del asistente New Remote, usando inicio de sesión OAuth o entrada de credenciales según el proveedor.
4. Ejecuta un Dry Run, luego un trabajo de sincronización real, y verifica los resultados con Folder Compare.

Mantener organizados la evidencia y los entregables de clientes entre discos locales y almacenamiento en la nube es mucho menos propenso a errores con una GUI que puedes verificar visualmente antes de cada transferencia.

---

**Guías relacionadas:**

- [Instalar RcloneView en Ubuntu / Debian Linux](https://rcloneview.com/support/blog/install-rcloneview-ubuntu-debian-linux)
- [RcloneView en Debian Linux — Sincronización y copia de seguridad en la nube](https://rcloneview.com/support/blog/rcloneview-debian-linux-cloud-sync)
- [Almacenamiento en la nube para empresas de ciberseguridad con RcloneView](https://rcloneview.com/support/blog/cloud-storage-cybersecurity-companies-rcloneview)

<CloudSupportGrid />
