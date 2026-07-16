---
slug: fix-azure-blob-sas-token-auth-errors-rcloneview
title: "Azure Blob Storage SAS-Token- und Authentifizierungsfehler mit RcloneView beheben"
authors:
  - tayson
description: "Beheben Sie SAS-Token- und Authentifizierungsfehler bei Azure Blob Storage in rclone. Lernen Sie, 401-, 403- und Fehler durch abgelaufene Tokens mit den Konfigurationswerkzeugen von RcloneView zu lösen."
keywords:
  - rcloneview
  - azure blob storage
  - sas token error
  - azure authentication error
  - azure 403 forbidden
  - azure 401 unauthorized
  - rclone azure setup
  - azure blob sas token
  - azure storage connection
  - fix azure rclone
tags:
  - troubleshooting
  - azure
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Azure Blob Storage SAS-Token- und Authentifizierungsfehler mit RcloneView beheben

> Die Authentifizierung bei Azure Blob Storage kann knifflig sein, da es mehrere Methoden und subtile Fallstricke bei der Konfiguration gibt. **RcloneView** vereinfacht den Einrichtungsprozess und hilft Ihnen, 401/403-Fehler schnell zu beheben.

Azure Blob Storage ist ein leistungsstarker und weit verbreiteter Objektspeicherdienst, doch die Verbindung von rclone dazu erfordert eine exakt korrekte Authentifizierung. Ob Sie Zugriffsschlüssel, SAS-Tokens oder Dienstprinzipale verwenden – ein einzelner falsch konfigurierter Parameter kann zu kryptischen Fehlermeldungen führen, die Ihren Arbeitsablauf vollständig blockieren.

Dieser Leitfaden behandelt die häufigsten Authentifizierungsfehler bei Azure Blob Storage mit rclone, erklärt die verfügbaren Authentifizierungsmethoden und zeigt Ihnen, wie Sie jedes Problem mit der visuellen Remote-Konfiguration von RcloneView beheben.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Überblick über die Azure-Authentifizierungsmethoden

Azure Blob Storage unterstützt über rclone mehrere Authentifizierungsmethoden. Zu verstehen, welche Sie verwenden, ist der erste Schritt bei der Fehlerbehebung:

- **Storage Account Access Key**: Ein gemeinsamer Schlüssel, der vollen Zugriff auf das gesamte Storage-Konto gewährt. Einfach, aber mächtig – behandeln Sie ihn wie ein Root-Passwort.
- **SAS-Token (Shared Access Signature)**: Ein begrenztes Token, das eingeschränkten Zugriff mit spezifischen Berechtigungen, Zeitgrenzen und optionalen IP-Einschränkungen gewährt. Sicherer als Zugriffsschlüssel für die externe Weitergabe.
- **Service Principal (Azure AD)**: OAuth-basierte Authentifizierung mit einer Azure-AD-Anwendung. Am besten für Unternehmensumgebungen mit rollenbasierter Zugriffskontrolle geeignet.
- **Managed Identity**: Verfügbar, wenn die Ausführung innerhalb von Azure erfolgt (z. B. auf einer Azure-VM). Nutzt automatisch den Identitätsdienst von Azure.

Jede Methode hat ihre eigenen Konfigurationsparameter und Fehlermodi. Die folgenden Abschnitte behandeln die häufigsten Fehler für jede Methode.

## Abgelaufenes SAS-Token (401 Unauthorized)

Der mit Abstand häufigste SAS-Token-Fehler ist der Ablauf. SAS-Tokens haben eine Startzeit und eine Ablaufzeit. Sobald das Token abläuft, liefert jede Anfrage einen `401 Unauthorized`- oder `403 AuthenticationFailed`-Fehler.

**Symptome:**
```
HTTP 401: Server failed to authenticate the request.
AuthenticationFailed: Signed expiry time must be after signed start time.
```

**So beheben Sie das Problem:**

1. Öffnen Sie das Azure-Portal und navigieren Sie zu Ihrem Storage-Konto.
2. Gehen Sie zu **Shared access signature** im Bereich Security + networking.
3. Legen Sie ein neues Ablaufdatum mit einem großzügigen Zeitfenster fest (z. B. 1 Jahr für den persönlichen Gebrauch, kürzer für gemeinsam genutzten Zugriff).
4. Generieren Sie ein neues SAS-Token.
5. Bearbeiten Sie in RcloneView Ihren Azure-Blob-Remote und ersetzen Sie das alte SAS-Token durch das neue.
6. Testen Sie die Verbindung, um zu bestätigen, dass der Zugriff wiederhergestellt ist.

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />

## Falsche SAS-Token-Berechtigungen (403 Forbidden)

Ein SAS-Token kann gültig sein, aber nicht über die für Ihren Vorgang benötigten Berechtigungen verfügen. Zum Beispiel schlägt ein Token mit nur Leserechten fehl, wenn rclone versucht, hochzuladen, zu löschen oder Container aufzulisten.

**Symptome:**
```
HTTP 403: This request is not authorized to perform this operation.
AuthorizationPermissionMismatch
```

**Erforderliche Berechtigungen für rclone-Vorgänge:**

| Vorgang | Erforderliche SAS-Berechtigungen |
|---|---|
| Container auflisten | List |
| Dateien durchsuchen | Read, List |
| Dateien hochladen | Write, Create |
| Dateien löschen | Delete |
| Vollständige Synchronisation | Read, Write, Delete, List, Create |

**So beheben Sie das Problem:** Generieren Sie im Azure-Portal ein neues SAS-Token mit allen erforderlichen Berechtigungen. Für rclone-Synchronisationsvorgänge benötigen Sie in der Regel Read, Write, Delete, List, Add und Create. Aktivieren Sie im Zweifelsfall alle Berechtigungen für Ihr persönliches Storage-Konto.

## IP-Einschränkung blockiert den Zugriff (403 Forbidden)

SAS-Tokens können auf bestimmte IP-Adressen oder -Bereiche beschränkt werden. Wenn Sie das Token im Büronetzwerk generiert haben, es aber von zu Hause aus verwenden möchten, blockiert die IP-Einschränkung den Zugriff.

**Symptome:**
```
HTTP 403: This request is not authorized to perform this operation using this source IP.
```

**So beheben Sie das Problem:**

- Generieren Sie ein neues SAS-Token ohne IP-Einschränkungen, oder
- fügen Sie Ihre aktuelle IP-Adresse dem zulässigen Bereich in der SAS-Token-Konfiguration hinzu, oder
- verwenden Sie stattdessen einen Storage-Account-Zugriffsschlüssel, der keinen IP-Einschränkungen unterliegt.

Wenn Sie eine dynamische IP-Adresse haben (die meisten Heimverbindungen), vermeiden Sie IP-beschränkte SAS-Tokens, es sei denn, Sie können sie regelmäßig aktualisieren.

## Zugriffsschlüsselfehler (401 Unauthorized)

Wenn Sie einen Storage-Account-Zugriffsschlüssel verwenden, bedeuten Fehler in der Regel, dass der Schlüssel falsch ist oder der Kontoname nicht korrekt ist.

**Häufige Ursachen:**

- Kopieren des Schlüssels mit angehängten Leerzeichen oder Zeilenumbruchzeichen.
- Verwendung von Key1, obwohl dieser rotiert wurde und Key2 nun aktiv ist.
- Falsche Schreibweise des Storage-Kontonamens.
- Verwendung der Connection-String anstelle nur des Schlüssels.

**So beheben Sie das Problem in RcloneView:**

1. Gehen Sie zum Azure-Portal, navigieren Sie zu Ihrem Storage-Konto und öffnen Sie **Access keys**.
2. Klicken Sie neben Key1 oder Key2 auf **Show** und kopieren Sie den Schlüssel sorgfältig.
3. Bearbeiten Sie Ihren Azure-Blob-Remote in RcloneView und fügen Sie den Schlüssel in das Feld `key` ein.
4. Prüfen Sie sorgfältig, dass das Feld `account` genau (case-sensitive) Ihrem Storage-Kontonamen entspricht.
5. Testen Sie die Verbindung.

## Konfigurationsfehler beim Service Principal

Die Service-Principal-Authentifizierung erfordert drei Werte: Tenant-ID, Client-ID und Client-Secret. Fehlende oder falsche Werte für eine dieser Angaben führen zu Authentifizierungsfehlern.

**Symptome:**
```
HTTP 401: AADSTS7000215: Invalid client secret provided.
HTTP 401: AADSTS70001: Application with identifier 'xxx' was not found.
```

**So beheben Sie das Problem:**

1. Gehen Sie im Azure-Portal zu **Azure Active Directory > App registrations**.
2. Suchen Sie Ihre Anwendung und überprüfen Sie die **Application (client) ID**.
3. Prüfen Sie die **Directory (tenant) ID** auf der Übersichtsseite.
4. Erstellen Sie unter **Certificates & secrets** ein neues Client-Secret, falls das alte abgelaufen ist.
5. Aktualisieren Sie in RcloneView die Remote-Konfiguration mit den korrekten Werten für tenant, client_id und client_secret.
6. Stellen Sie sicher, dass dem Service Principal die Rolle **Storage Blob Data Contributor** für das Storage-Konto zugewiesen ist.

## Ein korrektes SAS-Token Schritt für Schritt erstellen

Um SAS-Token-Probleme von vornherein zu vermeiden, gehen Sie wie folgt vor:

1. Öffnen Sie das Azure-Portal und navigieren Sie zu Ihrem Storage-Konto.
2. Klicken Sie im linken Menü auf **Shared access signature**.
3. Wählen Sie unter **Allowed services** die Option **Blob**.
4. Wählen Sie unter **Allowed resource types** die Optionen **Container** und **Object**.
5. Wählen Sie unter **Allowed permissions** alle benötigten Berechtigungen aus (Read, Write, Delete, List, Add, Create).
6. Setzen Sie **Start date** auf heute und **Expiry date** auf ein sinnvolles zukünftiges Datum.
7. Lassen Sie **Allowed IP addresses** leer, sofern Sie keine IP-Einschränkungen benötigen.
8. Setzen Sie **Allowed protocols** auf **HTTPS only**.
9. Klicken Sie auf **Generate SAS and connection string**.
10. Kopieren Sie das **SAS-Token** (beginnt mit `?sv=`). Entfernen Sie das führende `?`, wenn Sie es in die rclone-Konfiguration einfügen.

## Verbindung in RcloneView testen

Testen Sie die Verbindung sofort, nachdem Sie Ihren Azure-Blob-Remote konfiguriert oder aktualisiert haben:

1. Öffnen Sie den Remote im Explorer-Bereich von RcloneView.
2. Überprüfen Sie, ob Ihre Container aufgelistet werden.
3. Navigieren Sie in einen Container und bestätigen Sie, dass Sie Dateien sehen können.
4. Versuchen Sie, eine kleine Testdatei hochzuladen, um die Schreibberechtigungen zu überprüfen.
5. Löschen Sie die Testdatei, um die Löschberechtigungen zu bestätigen.

Wenn ein Schritt fehlschlägt, weist Ihnen die Fehlermeldung auf das konkrete Berechtigungs- oder Konfigurationsproblem hin. Beheben Sie es in der Remote-Konfiguration und testen Sie erneut.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="drag and drop" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Fügen Sie einen Azure-Blob-Storage-Remote mit Ihrer bevorzugten Authentifizierungsmethode hinzu (Access Key oder SAS-Token).
3. Testen Sie die Verbindung, indem Sie Ihre Container im Explorer-Bereich durchsuchen.
4. Wenn 401- oder 403-Fehler auftreten, lesen Sie im entsprechenden Abschnitt oben nach, um das Problem zu diagnostizieren und zu beheben.

Azure-Authentifizierungsfehler werden fast immer durch abgelaufene Tokens, fehlende Berechtigungen oder falsch kopierte Zugangsdaten verursacht. Eine systematische Fehlerbehebung mit den visuellen Werkzeugen von RcloneView macht es einfach, das Problem zu identifizieren und zu lösen.

---

**Weiterführende Anleitungen:**

- [Remote-Speicher durchsuchen und verwalten](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [AWS S3 und S3-kompatible Speicher hinzufügen](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)
- [Remote-Speicher sofort synchronisieren](https://rcloneview.com/support/howto/rcloneview-basic/synchronize-remote-storages)

<CloudSupportGrid />
