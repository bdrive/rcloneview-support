---
sidebar_position: 14
description: "Cifra tu archivo de configuración de rclone y úsalo con RcloneView estableciendo una contraseña de configuración en Ajustes."
keywords:
  - rcloneview
  - rclone config
  - encrypted config
  - config password
  - security
  - rclone.conf
tags:
  - RcloneView
  - Tutorial
  - security
  - settings
  - rclone config
date: 2026-02-12
author: ysh
---

# Usar un archivo de configuración de rclone cifrado

Rclone puede cifrar su archivo de configuración (`rclone.conf`) para que las credenciales de los remotos no se almacenen en texto plano. RcloneView es totalmente compatible con archivos de configuración cifrados: solo necesitas indicarle la contraseña.

Este tutorial cubre:

- Por qué cifrar tu configuración de rclone
- Cómo cifrar tu configuración existente con `rclone config`
- Cómo introducir la contraseña de configuración en RcloneView

---

## ¿Por qué cifrar tu configuración de rclone?

Tu archivo `rclone.conf` contiene credenciales (tokens, contraseñas, claves de API) de cada remoto que has configurado. Por defecto, estas se almacenan en texto plano. Cifrar el archivo de configuración protege esas credenciales si alguien accede a tu equipo o a una copia de seguridad.

- Evita la exposición de credenciales en texto plano.
- Añade una capa de seguridad en sistemas compartidos o multiusuario.
- Funciona con todos los remotos y funciones de rclone: no cambia nada excepto que el archivo se cifra en reposo.

---

## Paso 1: Cifra tu configuración de rclone

Abre una terminal y ejecuta:

```bash
rclone config
```

Verás un menú de opciones. Selecciona **`s`** para **Set configuration password**:

```
s) Set configuration password
q) Quit config
s/q> s
```

Introduce la contraseña que desees cuando se te solicite y confírmala. Rclone cifrará el archivo de configuración existente en el mismo lugar.

:::tip
Si ya tienes remotos configurados, seguirán funcionando. Rclone vuelve a cifrar todo el archivo con tu nueva contraseña.
:::

:::caution
Recuerda esta contraseña. Si la pierdes, tendrás que reconfigurar tus remotos desde cero.
:::

---

## Paso 2: Introduce la contraseña de configuración en RcloneView

1. Abre **Settings** (desde el menú superior).
2. Ve a la pestaña **Embedded Rclone**.
3. Desplázate hasta **Advanced Options**.
4. En el campo **Config Password**, introduce la misma contraseña que estableciste en el Paso 1.
5. Haz clic en **Restart Embedded Rclone**.

<img src="/support/images/en/tutorials/encrypted-config/settings-config-password.png" class="img-large img-center" alt="Config Password field in Embedded Rclone settings" />

Eso es todo: RcloneView descifrará y usará tu configuración cifrada sin problemas. Tus remotos aparecerán y funcionarán como de costumbre.

---

## Resumen

| Elemento | Descripción |
| --- | --- |
| Función | Usar un archivo de configuración de rclone cifrado con RcloneView |
| Cifrar | Ejecuta `rclone config` → `s) Set configuration password` |
| Configuración en RcloneView | Settings → Embedded Rclone → Advanced Options → Config Password |
| Aplicar | Haz clic en **Restart Embedded Rclone** después de introducir la contraseña |
| Ideal para | Proteger credenciales en sistemas compartidos o sensibles |
