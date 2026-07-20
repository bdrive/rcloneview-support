---
sidebar_position: 1
description: "Schritt-für-Schritt-Anleitung, um Ihre AWS Access Key ID, Ihren Secret Access Key und den Region-Code sicher abzurufen, um RcloneView mit AWS S3 zu verbinden."
keywords:
  - rcloneview
  - rclone
  - aws account
  - access key id
  - secret key id
  - region code
  - s3 setup
  - iam
  - aws s3
  - aws
  - secret access key
tags:
  - RcloneView
  - aws-account
  - secret-key-id
  - access-key-id
  - credentials
  - secret-access-key
  - aws-s3
date: 2025-05-26
author: Jay
---
# So erhalten Sie Ihren AWS Access Key und Ihre Region für Rclone

Bevor Sie AWS S3 als Remote in RcloneView hinzufügen können, benötigen Sie Ihre AWS **Access Key ID**, Ihren **Secret Access Key** und den **Region**-Code. Diese Anleitung führt Sie durch die Schritte, um diese sicher aus Ihrem AWS-Konto zu generieren.

## Schritt-für-Schritt: AWS Access Key ID und Secret Access Key erhalten

Um Rclone mit AWS S3 zu verbinden, müssen Sie einen Access Key in Ihrem AWS-Konto erstellen:

1. **Melden Sie sich** bei der [AWS Management Console](https://aws.amazon.com/console) an.
2. Navigieren Sie zu **IAM (Identity and Access Management)**.  
   Sie können in der AWS-Suchleiste nach „IAM“ suchen.
3. Klicken Sie in der linken Seitenleiste auf **Users**, dann auf Ihren **IAM-Benutzernamen**.
4. Wechseln Sie zum Tab **Security credentials**.
5. Scrollen Sie zum Abschnitt **Access keys** und klicken Sie auf **Create access key**.
6. Wählen Sie:  
   `✔ Application running outside AWS`
7. Geben Sie optional eine Beschreibung ein (z. B. `RcloneView Access`), um den Schlüssel besser nachverfolgen zu können.
8. Klicken Sie auf **Create access key**.
9. Kopieren Sie auf dem letzten Bildschirm beide:
   - **Access Key ID**
   - **Secret Access Key**

:::important
⚠️ Diese Schlüssel werden nur **einmal** angezeigt. Speichern Sie sie unbedingt **sicher** (z. B. in einem Passwort-Manager).
:::

## So finden Sie Ihre AWS S3-Region

Sie müssen außerdem die AWS **Region** kennen, in der sich Ihr S3-Bucket befindet. Diese wird beim Einrichten des Rclone-Remotes benötigt.

### Option 1: Über die AWS S3 Console prüfen

1. Besuchen Sie die [Amazon S3 Console](https://s3.console.aws.amazon.com/s3/home).
2. Suchen Sie Ihren Bucket in der Liste.
3. Die Spalte **Region** zeigt die Region an (z. B. `ap-northeast-2` für Seoul, `us-east-1` für Virginia).

### Option 2: Die offizielle Region-Liste verwenden

Diese offizielle Dokumentation enthält alle verfügbaren Regionen und deren Codes:

👉 [AWS Region Codes and Endpoints](https://docs.aws.amazon.com/general/latest/gr/s3.html)

:::danger Security Tip
🔒 **Geben Sie Ihre AWS-Zugangsdaten niemals öffentlich weiter oder legen Sie diese offen.**  
Rotieren Sie Schlüssel regelmäßig und löschen Sie ungenutzte Schlüssel über die **IAM Console**.
:::
