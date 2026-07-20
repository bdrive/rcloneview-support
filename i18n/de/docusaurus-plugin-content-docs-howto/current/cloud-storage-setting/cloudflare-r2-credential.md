---
sidebar_position: 3
description: "So erhalten Sie Cloudflare R2-Anmeldedaten und den Endpunkt"
keywords:
  - rcloneview
  - cloud
  - rclone
  - cloudflare r2
  - r2 endpoint
  - access key id
  - secret access key
  - cloudflare r2 rclone
  - cloudflare s3 api
  - connect r2 to rcloneview
tags:
  - RcloneView
  - Cloud
  - cloud-storage
  - credentials
  - configuration
  - access-key-id
  - secret-access-key
  - secret-key-id
  - cloudflare-r2
date: 2025-07-12
author: Jay
---
# So erhalten Sie Cloudflare R2-Anmeldedaten und den Endpunkt

Um **Cloudflare R2** mit Rclone oder **RcloneView** zu verbinden, benötigen Sie drei wichtige Informationen:

- ✅ Access Key ID  
- ✅ Secret Access Key  
- ✅ R2 S3-kompatible Endpunkt-URL  

Diese Anleitung führt Sie Schritt für Schritt durch das Abrufen dieser Informationen aus Ihrem Cloudflare-Dashboard.

---

## 🧰 Voraussetzungen

Bevor Sie beginnen:

- Sie benötigen ein Cloudflare-Konto mit aktiviertem **R2 Object Storage**.
- Sie benötigen Zugriff auf das [Cloudflare Dashboard](https://dash.cloudflare.com).
- Grundlegendes Verständnis von Cloud-Speicher-Konzepten ist hilfreich.

---

## 📦 Schritt 1: Erstellen Sie einen R2-Bucket (falls noch nicht geschehen)

1. Melden Sie sich bei Ihrem [Cloudflare Dashboard](https://dash.cloudflare.com) an.
2. Gehen Sie in der linken Seitenleiste zu **R2 → Object Storage**.
3. Klicken Sie auf **Create bucket**.
4. Geben Sie einen eindeutigen Namen für Ihren Bucket ein.
5. Wählen Sie einen Standort (z. B. **Automatic** oder eine Region wie `westerneurope`).
6. Klicken Sie auf **Create Bucket**.

Dieser Bucket dient als Ihr Speicherort für Dateien, die mit RcloneView übertragen werden.

---

## 🔐 Schritt 2: API-Anmeldedaten generieren

Um sich bei R2 zu authentifizieren, müssen Sie API-Tokens erstellen, die Zugriffsberechtigungen bereitstellen.

### ➕ So erstellen Sie einen Access Key und Secret Key:

1. Gehen Sie im Cloudflare-Dashboard zu **Storage & databases -> R2 Object storage → Overview**.
2. Klicken Sie auf die Schaltfläche **Manage** neben **API Tokens** im Abschnitt **Account Details**.

   <img src="/support/images/en/howto/cloud-storage-setting/cloudflare-manage-r2-api-token.png" alt="cloudflare manage r2 api token" class="img-medium img-center" />
   
3. Klicken Sie auf **Create API Token**. Wählen Sie den Token-Typ (für Account oder User), der zu Ihrer Nutzung passt.

<img src="/support/images/en/howto/cloud-storage-setting/cloudflare-create-user-api-token.png" alt="cloudflare create user api token" class="img-medium img-center" />

3. Geben Sie dem Token einen Namen (z. B. `Rclone Access`).
4. Wählen Sie die Berechtigungen:
   - `Admin Read & Write` (vollständiger Zugriff)  
	❗Andere Berechtigungen erlauben möglicherweise keinen Bucket-Zugriff.
1. Wählen Sie, ob der Token gelten soll für:
   - Alle Buckets
   - Nur bestimmte Buckets
7. Legen Sie optional ein Ablaufdatum fest (oder belassen Sie es bei "Forever").
8. Klicken Sie auf **Create API Token**.

Sobald der Token erstellt wurde, zeigt Cloudflare Ihnen Folgendes an:

- **Access Key ID**
- **Secret Access Key**

:::danger Wichtig
Diese Anmeldedaten werden nur einmal angezeigt. Stellen Sie sicher, dass Sie sie kopieren und sicher aufbewahren.
:::

---

## **🌐 Schritt 3: R2-Endpunkt-URL abrufen**

1. Gehen Sie in Ihrem Cloudflare-Dashboard zu **R2 → Object Storage**.  
2. Klicken Sie auf Ihren **Bucket-Namen**, um dessen Details zu öffnen.  
3. Navigieren Sie zur Registerkarte **Settings**.  
4. Im Abschnitt **S3 API** finden Sie das Endpunktformat und die Kontodetails.    
    
Je nachdem, wie Ihr API-Token erstellt wurde, sollten Sie eines der folgenden Endpunktformate verwenden:

 ### 🔐 Wenn Ihr API-Token Admin-Zugriff hat und auf alle Buckets zugreifen darf:

Verwenden Sie den Basis-Endpunkt (ohne Bucket-Pfad):

```
https://<ACCOUNT_ID>.r2.cloudflarestorage.com
```

### 📦 Wenn Ihr API-Token nur auf einen bestimmten Bucket beschränkt ist — oder wenn Sie auf einen bestimmten Bucket zugreifen möchten:

Verwenden Sie den bucket-spezifischen Endpunkt:

```
https://<ACCOUNT_ID>.r2.cloudflarestorage.com/<BUCKET-NAME>
```

Sie finden sowohl Ihre **ACCOUNT_ID** als auch den Bucket-Namen im Abschnitt **S3 API** auf der Registerkarte **Settings** des Buckets:

<img src="/support/images/en/howto/cloud-storage-setting/cloudflare-r2-s3-api-endpoint.png" alt="cloudflare r2 s3 api endpoint" class="img-medium img-center" />

Verwenden Sie diesen Endpunkt beim Einrichten Ihres Cloudflare R2-Remotes in **RcloneView** oder über die **Rclone CLI**.

---
   
## ✅ Zusammenfassung

Sie sollten nun über folgende Werte verfügen, um Ihren Cloudflare R2-Remote zu konfigurieren:

| Feld              | Beschreibung                                      |
|------------------|--------------------------------------------------|
| Access Key ID     | Bereitgestellt durch den Cloudflare API-Token                |
| Secret Access Key | Bereitgestellt durch den Cloudflare API-Token                |
| Endpoint URL      | Zu finden in den R2-Bucket-Einstellungen (S3-kompatible URL) |

Sie können diese nun in **RcloneView** eingeben, wenn Sie einen neuen S3-kompatiblen Remote einrichten, oder die Rclone CLI verwenden.

👉 Weiter: [How to Add S3-Compatible Remote in RcloneView](/howto/remote-storage-connection-settings/s3)
