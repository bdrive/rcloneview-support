---
slug: fix-azure-blob-sas-token-auth-errors-rcloneview
title: "Cómo solucionar errores de token SAS y autenticación de Azure Blob Storage con RcloneView"
authors:
  - tayson
description: "Soluciona errores de token SAS y autenticación de Azure Blob Storage en rclone. Aprende a resolver problemas de errores 401, 403 y tokens expirados usando las herramientas de configuración de RcloneView."
keywords:
  - rcloneview
  - azure blob storage
  - error de token sas
  - error de autenticación de azure
  - azure 403 forbidden
  - azure 401 unauthorized
  - configuración de azure con rclone
  - token sas de azure blob
  - conexión de azure storage
  - solucionar azure rclone
tags:
  - RcloneView
  - troubleshooting
  - azure
  - cloud-storage
  - tips
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Cómo solucionar errores de token SAS y autenticación de Azure Blob Storage con RcloneView

> La autenticación de Azure Blob Storage puede ser complicada, con múltiples métodos y sutiles errores de configuración. **RcloneView** simplifica el proceso de configuración y te ayuda a diagnosticar errores 401/403 rápidamente.

Azure Blob Storage es un servicio de almacenamiento de objetos potente y ampliamente utilizado, pero conectarse a él desde rclone requiere configurar la autenticación con precisión. Ya sea que uses claves de acceso, tokens SAS o entidades de servicio, un solo parámetro mal configurado puede provocar mensajes de error crípticos que bloquean por completo tu flujo de trabajo.

Esta guía cubre los errores de autenticación de Azure Blob Storage más comunes al usar rclone, explica los distintos métodos de autenticación disponibles y te guía paso a paso para solucionar cada problema usando la configuración visual de remotos de RcloneView.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Resumen de los métodos de autenticación de Azure

Azure Blob Storage admite varios métodos de autenticación a través de rclone. Entender cuál estás usando es el primer paso para solucionar problemas:

- **Clave de acceso de la cuenta de almacenamiento**: Una clave compartida que otorga acceso completo a toda la cuenta de almacenamiento. Simple pero poderosa: trátala como una contraseña de administrador.
- **Token SAS (Shared Access Signature)**: Un token con alcance limitado que otorga acceso restringido con permisos específicos, límites de tiempo y restricciones de IP opcionales. Más seguro que las claves de acceso para compartir externamente.
- **Entidad de servicio (Azure AD)**: Autenticación basada en OAuth mediante una aplicación de Azure AD. Ideal para entornos empresariales con control de acceso basado en roles.
- **Identidad administrada**: Disponible al ejecutarse desde dentro de Azure (por ejemplo, una VM de Azure). Utiliza el servicio de identidad de Azure automáticamente.

Cada método tiene sus propios parámetros de configuración y modos de fallo. Las siguientes secciones abordan los errores más comunes de cada uno.

## Token SAS expirado (401 Unauthorized)

El error más común con los tokens SAS es la expiración. Los tokens SAS tienen una hora de inicio y una hora de expiración. Una vez que el token expira, cada solicitud devuelve un error `401 Unauthorized` o `403 AuthenticationFailed`.

**Síntomas:**
```
HTTP 401: Server failed to authenticate the request.
AuthenticationFailed: Signed expiry time must be after signed start time.
```

**Cómo solucionarlo:**

1. Abre el Portal de Azure y navega a tu cuenta de almacenamiento.
2. Ve a **Shared access signature** dentro de la sección Security + networking.
3. Establece una nueva fecha de expiración con un margen generoso (por ejemplo, 1 año para uso personal, más corto para acceso compartido).
4. Genera un nuevo token SAS.
5. En RcloneView, edita tu remoto de Azure Blob y reemplaza el token SAS antiguo por el nuevo.
6. Prueba la conexión para confirmar que el acceso se ha restaurado.

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />

## Permisos incorrectos del token SAS (403 Forbidden)

Un token SAS puede ser válido pero carecer de los permisos necesarios para tu operación. Por ejemplo, un token con solo permiso de lectura fallará cuando rclone intente subir, eliminar o listar contenedores.

**Síntomas:**
```
HTTP 403: This request is not authorized to perform this operation.
AuthorizationPermissionMismatch
```

**Permisos requeridos para las operaciones de rclone:**

| Operación | Permisos SAS requeridos |
|---|---|
| Listar contenedores | List |
| Explorar archivos | Read, List |
| Subir archivos | Write, Create |
| Eliminar archivos | Delete |
| Sincronización completa | Read, Write, Delete, List, Create |

**Cómo solucionarlo:** Genera un nuevo token SAS en el Portal de Azure con todos los permisos requeridos. Para operaciones de sincronización con rclone, normalmente necesitas Read, Write, Delete, List, Add y Create. En caso de duda, habilita todos los permisos para tu cuenta de almacenamiento personal.

## Restricción de IP que bloquea el acceso (403 Forbidden)

Los tokens SAS pueden restringirse a direcciones IP o rangos específicos. Si generaste el token estando en tu red de la oficina pero intentas usarlo desde casa, la restricción de IP te bloqueará.

**Síntomas:**
```
HTTP 403: This request is not authorized to perform this operation using this source IP.
```

**Cómo solucionarlo:**

- Genera un nuevo token SAS sin restricciones de IP, o
- Agrega tu dirección IP actual al rango permitido en la configuración del token SAS, o
- Usa una clave de acceso de la cuenta de almacenamiento en su lugar, que no está sujeta a restricciones de IP.

Si tienes una IP dinámica (como en la mayoría de las conexiones domésticas), evita usar tokens SAS restringidos por IP a menos que puedas actualizarlos con regularidad.

## Errores de clave de acceso (401 Unauthorized)

Si estás usando una clave de acceso de la cuenta de almacenamiento, los errores suelen significar que la clave es incorrecta o que el nombre de la cuenta está mal escrito.

**Causas comunes:**

- Copiar la clave con espacios en blanco o saltos de línea adicionales.
- Usar Key1 cuando ha sido rotada y ahora Key2 está activa.
- Escribir mal el nombre de la cuenta de almacenamiento.
- Usar la cadena de conexión en lugar de solo la clave.

**Cómo solucionarlo en RcloneView:**

1. Ve al Portal de Azure, navega a tu cuenta de almacenamiento y abre **Access keys**.
2. Haz clic en **Show** junto a Key1 o Key2, luego copia la clave con cuidado.
3. Edita tu remoto de Azure Blob en RcloneView y pega la clave en el campo `key`.
4. Verifica que el campo `account` coincida exactamente con el nombre de tu cuenta de almacenamiento (distingue mayúsculas y minúsculas).
5. Prueba la conexión.

## Errores de configuración de la entidad de servicio

La autenticación con entidad de servicio requiere tres valores: el ID de inquilino (tenant ID), el ID de cliente (client ID) y el secreto de cliente (client secret). Si falta alguno de estos valores o es incorrecto, la autenticación fallará.

**Síntomas:**
```
HTTP 401: AADSTS7000215: Invalid client secret provided.
HTTP 401: AADSTS70001: Application with identifier 'xxx' was not found.
```

**Cómo solucionarlo:**

1. En el Portal de Azure, ve a **Azure Active Directory > App registrations**.
2. Busca tu aplicación y verifica el **Application (client) ID**.
3. Revisa el **Directory (tenant) ID** en la página de resumen.
4. En **Certificates & secrets**, crea un nuevo secreto de cliente si el anterior expiró.
5. En RcloneView, actualiza la configuración del remoto con los valores correctos de tenant, client_id y client_secret.
6. Asegúrate de que la entidad de servicio tenga asignado el rol **Storage Blob Data Contributor** en la cuenta de almacenamiento.

## Cómo generar un token SAS correcto paso a paso

Para evitar por completo los problemas de token SAS, sigue este proceso:

1. Abre el Portal de Azure y navega a tu cuenta de almacenamiento.
2. Haz clic en **Shared access signature** en el menú izquierdo.
3. En **Allowed services**, selecciona **Blob**.
4. En **Allowed resource types**, selecciona **Container** y **Object**.
5. En **Allowed permissions**, selecciona todos los permisos que necesites (Read, Write, Delete, List, Add, Create).
6. Establece **Start date** en la fecha de hoy y **Expiry date** en una fecha futura razonable.
7. Deja **Allowed IP addresses** vacío a menos que necesites restricciones de IP.
8. Establece **Allowed protocols** en **HTTPS only**.
9. Haz clic en **Generate SAS and connection string**.
10. Copia el **SAS token** (comienza con `?sv=`). Elimina el `?` inicial al pegarlo en la configuración de rclone.

## Cómo probar tu conexión en RcloneView

Después de configurar o actualizar tu remoto de Azure Blob, prueba la conexión de inmediato:

1. Abre el remoto en el panel del explorador de RcloneView.
2. Verifica que tus contenedores aparezcan listados.
3. Navega dentro de un contenedor y confirma que puedes ver los archivos.
4. Intenta subir un archivo de prueba pequeño para verificar los permisos de escritura.
5. Elimina el archivo de prueba para confirmar los permisos de eliminación.

Si algún paso falla, el mensaje de error te indicará el permiso o problema de configuración específico. Corrígelo en la configuración del remoto y vuelve a probar.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="drag and drop" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Agrega un remoto de Azure Blob Storage usando tu método de autenticación preferido (clave de acceso o token SAS).
3. Prueba la conexión explorando tus contenedores en el panel del explorador.
4. Si encuentras errores 401 o 403, consulta la sección correspondiente más arriba para diagnosticar y solucionar el problema.

Los errores de autenticación de Azure casi siempre se deben a tokens expirados, permisos faltantes o credenciales copiadas incorrectamente. La solución sistemática de problemas con las herramientas visuales de RcloneView facilita identificar y resolver el problema.

---

**Guías relacionadas:**

- [Explora y administra el almacenamiento remoto](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [Agrega AWS S3 y almacenamiento compatible con S3](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)
- [Sincroniza almacenamientos remotos al instante](https://rcloneview.com/support/howto/rcloneview-basic/synchronize-remote-storages)

<CloudSupportGrid />
