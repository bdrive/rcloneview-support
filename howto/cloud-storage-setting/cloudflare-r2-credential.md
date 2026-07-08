---
sidebar_position: 3
description: How to Obtain Cloudflare R2 Credentials and Endpoint
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
# How to Obtain Cloudflare R2 Credentials and Endpoint

To connect **Cloudflare R2** to Rclone or **RcloneView**, you’ll need three key pieces of information:

- ✅ Access Key ID  
- ✅ Secret Access Key  
- ✅ R2 S3-Compatible Endpoint URL  

This guide walks you through how to retrieve these from your Cloudflare dashboard.

---

## 🧰 Prerequisites

Before you begin:

- You must have a Cloudflare account with **R2 Object Storage** enabled.
- You need access to the [Cloudflare Dashboard](https://dash.cloudflare.com).
- Basic understanding of cloud storage concepts is helpful.

---

## 📦 Step 1: Create an R2 Bucket (If You Haven’t Already)

1. Log in to your [Cloudflare Dashboard](https://dash.cloudflare.com).
2. In the left sidebar, go to **R2 → Object Storage**.
3. Click **Create bucket**.
4. Enter a unique name for your bucket.
5. Choose a location (e.g., **Automatic**, or a region like `westerneurope`).
6. Click **Create Bucket**.

This bucket will be your storage location for files transferred using RcloneView.

---

## 🔐 Step 2: Generate API Credentials

To authenticate with R2, you’ll need to create API tokens that provide access permissions.

### ➕ How to Create an Access Key and Secret Key:

1. Go to **Storage & databases -> R2 Object storage → Overview** in the Cloudflare dashboard.
2. Click **Manage** button next to **API Tokens** in **Account Details** section.

   <img src="/support/images/en/howto/cloud-storage-setting/cloudflare-manage-r2-api-token.png" alt="cloudflare manage r2 api token" class="img-medium img-center" />
   
3. Click **Create API Token**. Choose the token type(for Account or User) that fits your usage.

<img src="/support/images/en/howto/cloud-storage-setting/cloudflare-create-user-api-token.png" alt="cloudflare create user api token" class="img-medium img-center" />

3. Give the token a name (e.g., `Rclone Access`).
4. Select the permissions:
   - `Admin Read & Write` (full access)  
	❗other permissions may not allow bucket access.
1. Choose whether to apply to:
   - All buckets
   - Specific buckets only
7. Optionally, set expiration (or leave as "Forever").
8. Click **Create API Token**.

Once the token is created, Cloudflare will show you:

- **Access Key ID**
- **Secret Access Key**

:::danger Important
These credentials will be shown only once. Make sure to copy and store them securely.
:::

---

## **🌐 Step 3: Get the R2 Endpoint URL**

1. Go to **R2 → Object Storage** in your Cloudflare dashboard.  
2. Click your **bucket name** to open its details.  
3. Navigate to the **Settings** tab.  
4. In the **S3 API** section, you’ll find the endpoint format and account details.    
    
Depending on how your API token was created, you should use one of the following endpoint formats:

 ### 🔐 If your API Token has Admin-level access and is allowed to access all buckets:

Use the base endpoint (without a bucket path):

```
https://<ACCOUNT_ID>.r2.cloudflarestorage.com
```

### 📦 If your API Token is scoped to a specific bucket only — or if you want to access to a particular bucket:

Use the bucket-specific endpoint:

```
https://<ACCOUNT_ID>.r2.cloudflarestorage.com/<BUCKET-NAME>
```

You can find both your **ACCOUNT_ID** and **bucket name** in the **S3 API** section of the bucket’s **Settings** tab:

<img src="/support/images/en/howto/cloud-storage-setting/cloudflare-r2-s3-api-endpoint.png" alt="cloudflare r2 s3 api endpoint" class="img-medium img-center" />

Use this endpoint when setting up your Cloudflare R2 remote in **RcloneView** or via **Rclone CLI**.

---
   
## ✅ Summary

You should now have the following values ready to configure your Cloudflare R2 remote:

| Field             | Description                                      |
|------------------|--------------------------------------------------|
| Access Key ID     | Provided by Cloudflare API token                |
| Secret Access Key | Provided by Cloudflare API token                |
| Endpoint URL      | Found in R2 bucket settings (S3-compatible URL) |

You can now enter these into **RcloneView** when setting up a new S3-compatible remote, or use the Rclone CLI.

👉 Next: [How to Add S3-Compatible Remote in RcloneView](/howto/remote-storage-connection-settings/s3)
