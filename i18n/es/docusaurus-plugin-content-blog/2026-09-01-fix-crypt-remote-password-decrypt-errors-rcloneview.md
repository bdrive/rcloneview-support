---
slug: fix-crypt-remote-password-decrypt-errors-rcloneview
title: "Solucionar errores de descifrado del remoto Crypt — Problemas de contraseña y configuración en RcloneView"
authors:
  - kai
description: "Solucione fallos de descifrado del remoto crypt, errores de bad-decrypt y contraseñas perdidas en RcloneView. Soluciones prácticas para el almacenamiento en la nube cifrado."
keywords:
  - crypt remote decryption error
  - rclone crypt bad decrypt
  - fix rclone crypt password
  - error de almacenamiento en la nube cifrado
  - contraseña de configuración de rclone perdida
  - crypt remote troubleshooting
  - error de cifrado de rcloneview
  - descifrar archivos en la nube rclone
  - crypt remote config corrupted
  - rclone crypt filename error
tags:
  - RcloneView
  - troubleshooting
  - tips
  - encryption
  - crypt
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Solucionar errores de descifrado del remoto Crypt — Problemas de contraseña y configuración en RcloneView

> Un remoto crypt que de repente arroja "bad decrypt" o se niega a listar archivos generalmente significa una cosa: la contraseña usada para leer los datos no coincide con la que se usó para cifrarlos.

El remoto virtual crypt de rclone envuelve un remoto existente y cifra nombres de archivo, nombres de carpeta y contenido de archivos antes de que nada salga de su equipo. Esa protección es potente, pero también significa que una única contraseña no coincidente o una entrada de configuración corrupta puede dejarle sin acceso a archivos que, por lo demás, están intactos en la nube. RcloneView muestra estos errores directamente en la pestaña Log y en el Terminal, lo que permite diagnosticar exactamente qué salió mal en lugar de adivinar.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Por qué falla el descifrado de Crypt

Un remoto crypt almacena dos secretos: la contraseña principal y una segunda contraseña opcional (la "sal"). Ambas se ofuscan y se guardan en su configuración de rclone al configurar el remoto mediante el asistente New Remote de RcloneView. El descifrado falla cuando alguno de los dos valores no coincide con el que se usó originalmente; una causa habitual es recrear el remoto crypt de memoria tras un reinicio de la configuración, o copiar un archivo `rclone.conf` entre equipos sin copiar las cadenas de contraseña ofuscadas exactas.

Otro desencadenante frecuente es aplicar el modo de "cifrado de nombre de archivo" incorrecto de crypt. Si el remoto original usaba el cifrado de nombre de archivo estándar y un remoto reconstruido usa "off" u "obfuscate" en su lugar, RcloneView mostrará nombres ilegibles o fallará por completo al intentar leer una estructura de directorios que no puede interpretar.

<img src="/support/images/en/blog/new-remote.png" alt="Creación de un remoto crypt en RcloneView con campos de contraseña" class="img-large img-center" />

## Solucionar errores de Bad Decrypt y nombres de archivo ilegibles

Comience en Remote Manager y abra la configuración del remoto crypt para compararla con la del remoto subyacente que envuelve. Confirme que los campos password y password2, el modo de cifrado de nombre de archivo y la ruta de destino coinciden todos con lo que se usó originalmente. Si no está seguro de la configuración exacta, revise la pestaña Log tras activar el registro de rclone en nivel DEBUG en Settings; el texto del error suele indicar el campo concreto que rclone rechazó.

Si el remoto crypt se reconstruyó tras un borrado de la configuración y todavía conserva el `rclone.conf` original, no vuelva a escribir la contraseña a mano. Las contraseñas almacenadas en los archivos de configuración de rclone están ofuscadas, no en texto plano, por lo que pegar exactamente la cadena ofuscada la preserva con precisión; volver a escribirla introduce el riesgo de una contraseña sutilmente distinta que parece idéntica pero no descifra nada.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Historial de trabajos mostrando una sincronización fallida causada por un error de remoto crypt" class="img-large img-center" />

## Recuperación cuando la contraseña se ha perdido de verdad

No hay puerta trasera: el cifrado crypt de rclone está diseñado de forma que, sin la contraseña correcta, los datos son irrecuperables; ni por RcloneView, ni por rclone, ni por el proveedor de la nube. Si una contraseña se ha perdido de verdad, el camino práctico es la prevención en lugar de la recuperación. Exporte su configuración de rclone regularmente a través de Settings y guarde el archivo exportado (o al menos la contraseña de crypt) en un lugar seguro y separado del equipo donde se ejecuta RcloneView.

RcloneView también sincroniza y compara carpetas con la licencia FREE, así que, una vez que un remoto crypt funcione correctamente, puede ejecutar una sincronización Dry Run contra él para confirmar que el descifrado funciona antes de confiarle datos nuevos. Esto detecta las discrepancias de contraseña antes de que provoquen un trabajo de backup fallido.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Vista de comparación de carpetas verificando que el contenido del remoto crypt coincide con lo esperado" class="img-large img-center" />

## Primeros pasos

1. **Descargue RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Abra Remote Manager y localice el remoto crypt que produce el error.
3. Active el registro de rclone en nivel DEBUG en Settings y luego reproduzca el error para capturar el mensaje de fallo exacto.
4. Compare la contraseña, password2 y el modo de cifrado de nombre de archivo del remoto crypt con sus notas de configuración originales o con la configuración exportada.

Resolver rápidamente los errores del remoto crypt marca la diferencia entre una simple comprobación de configuración y un backup verdaderamente irrecuperable: trate su contraseña de cifrado con el mismo cuidado que los datos que protege.

---

**Guías relacionadas:**

- [Zero-CLI Encryption with RcloneView Crypt Remote: Protect Any Cloud Folder](https://rcloneview.com/support/blog/zero-cli-crypt-remote-rcloneview)
- [How to Backup, Migrate, and Manage Your Rclone Config with RcloneView](https://rcloneview.com/support/blog/backup-migrate-rclone-config-rcloneview)
- [Fix Rclone Config Corruption and Recovery Issues in RcloneView](https://rcloneview.com/support/blog/fix-rclone-config-corruption-rcloneview)

<CloudSupportGrid />
