---
sidebar_position: 2
description: "Guía paso a paso para configurar y ejecutar el daemon Rclone Remote Control (rcd) en una instancia de AWS EC2 basada en Ubuntu, incluyendo el acceso a la API y la configuración del servicio systemd."
keywords:
  - rcloneview
  - rclone
  - aws
  - ec2
  - remote control
  - rclone rcd
  - systemd
  - ubuntu
  - daemon
  - cloud storage
  - rclone api
  - external rclone
tags:
  - RcloneView
  - aws
  - aws-ec2
  - remote-server
  - rclone-rcd
  - external-rclone
  - rclone
date: 2025-07-03
author: Jay
---
# Ejecutar el motor de Rclone en AWS EC2

  Esta guía explica cómo configurar el **daemon rcd de Rclone** en una **instancia de EC2 basada en Ubuntu**, habilitando el acceso remoto a la API desde fuera de AWS.

---

## **✅ Resumen paso a paso**

1. [Lanzar una instancia de EC2](#launch-an-ec2-instance)
2. [Configurar el grupo de seguridad (abrir el puerto 5572)](#adjust-security-group-if-needed)
3. [Conectarse por SSH a la instancia](#ssh-into-the-ec2-instance)
4. [Instalar Rclone](#install-rclone)
5. [Ejecutar el daemon rclone rcd](#run-the-rclone-rcd-daemon)
6. [Probar el acceso externo a la API de Rclone](#verify-external-api-access)
7. [Ejecutar Rclone rcd como servicio systemd](#run-rclone-rcd-as-a-systemd-service)

---

### Lanzar una instancia de EC2

- Inicia sesión en la consola de administración de AWS  
- Navega a **EC2 → Launch Instance**  
- Configura de la siguiente manera:  
    - **Name**: rclone-server (o el nombre que prefieras)  
    - **AMI**: Ubuntu Server 22.04 LTS (o 20.04 LTS)   
    - **Instance type**: t2.micro (elegible para el nivel gratuito)  
    - **Key pair**: crea uno nuevo o selecciona uno existente (para el acceso SSH)  
    - **Storage**: al menos 8 GB  
    - **Network**: VPC predeterminada  
    - **Reglas de entrada del grupo de seguridad**:  
        - SSH (puerto 22): restringido a tu IP  
        - **Custom TCP (puerto 5572): 0.0.0.0/0** — necesario para la API de Rclone  
- Lanza la instancia  

---

### Ajustar el grupo de seguridad (si es necesario)

Ve a EC2 → Instances → Selecciona tu instancia → pestaña Security → Haz clic en Security Group → Edit inbound rules:

```
Type: Custom TCP
Port: 5572
Source: 0.0.0.0/0  (o restringe a tu IP)
```

---

### Conectarse por SSH a la instancia de EC2

Desde tu terminal local:

```
chmod 400 /path/to/your-key.pem
ssh -i /path/to/your-key.pem ubuntu@<EC2-PUBLIC-IP>
```

🔗 Para obtener información sobre cómo crear y usar pares de claves .pem, consulta la [página oficial de AWS “Create a key pair”](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/create-key-pairs.html)  .

---

### Instalar Rclone

```
curl https://rclone.org/install.sh | sudo bash
rclone version
```

---

### Ejecutar el daemon rclone rcd

```
rclone rcd \
  --rc-user=admin \
  --rc-pass=admin \
  --rc-addr=0.0.0.0:5572
```

- --rc-user/--rc-pass: protege el acceso a la API
- --rc-addr: escucha en todas las interfaces para que puedas conectarte externamente
- --rc-web-gui: inicia la interfaz web

💡 Para un funcionamiento continuo, considera ejecutarlo bajo tmux, screen, o como un servicio systemd.

---

### Verificar el acceso externo a la API

Ejecuta una comprobación de estado simple con curl:

```
curl -X POST -u admin:admin \
  "http://<EC2-PUBLIC-IP-or-DNS>:5572/rc/noop"
```

Respuesta esperada:

```
{}
```

Esto confirma que la API de control remoto (RC) de Rclone está en ejecución y aceptando solicitudes autenticadas.

:::important 🛠️ Notas
- Asegúrate de reemplazar admin:admin con el --rc-user y --rc-pass reales que definiste al iniciar el daemon.
- Reemplaza `<EC2-PUBLIC-IP-or-DNS>` con la IP pública o el nombre DNS real de tu instancia de EC2.
- El endpoint debe comenzar con /rc/. El comando /rc/noop no hace nada y simplemente confirma que la API está disponible.
:::

---

#### **🔐 Buenas prácticas de seguridad recomendadas**

- Usa credenciales seguras y únicas para --rc-user / --rc-pass  
- Restringe el acceso mediante:
    - Una lista blanca de IP reducida en el grupo de seguridad de AWS, o   
    - Vincular a una IP específica: `--rc-addr=<your_ip>:5572`  
- Para proteger el tráfico, considera añadir HTTPS mediante un proxy inverso (por ejemplo, Nginx + TLS) o servicios como Cloudflare Tunnel    

---
### Ejecutar Rclone rcd como servicio systemd

Para mantener el daemon de Rclone (`rcd`) ejecutándose en segundo plano incluso después de reinicios, puedes registrarlo como un servicio systemd en tu sistema Linux (como una instancia de Ubuntu EC2).
- Se iniciará automáticamente al arrancar el sistema.
- Se ejecuta de forma fiable en segundo plano con reinicios automáticos en caso de fallo.

---

#### 1. Crear un archivo de servicio systemd

Crea el siguiente archivo:

````

```bash
sudo nano /etc/systemd/system/rclone-rcd.service
````

Pega el siguiente contenido (ajusta tu rc-user, rc-pass y cualquier otro flag según sea necesario):

```
[Unit]
Description=Rclone Remote Control Daemon
After=network-online.target

[Service]
User=ubuntu
ExecStart=/usr/bin/rclone rcd \
  --rc-user=admin \
  --rc-pass=admin \
  --rc-addr=0.0.0.0:5572 \
  --rc-web-gui \
  --log-file=/var/log/rclone.log \
  --log-level=INFO
Restart=on-failure

[Install]
WantedBy=multi-user.target
```

> 🔒 **Nota de seguridad**: Cambia las credenciales de admin por unas seguras en entornos de producción.

---

#### 2. Recargar systemd y habilitar el servicio

```
sudo systemctl daemon-reexec
sudo systemctl daemon-reload
sudo systemctl enable rclone-rcd
sudo systemctl start rclone-rcd
```

---

#### 3. Verificar el estado

Para confirmar que el daemon está en ejecución:

```
sudo systemctl status rclone-rcd
```

Deberías ver active (running) en verde.

---


Con estos pasos, tu daemon de Rclone se ejecuta en la nube, totalmente accesible a través de RcloneView u otros clientes, listo para gestionar de forma eficiente tu almacenamiento remoto desde cualquier lugar.
