---
slug: fix-oauth-token-expired-cloud-sync-rcloneview
title: "OAuth-Token-abgelaufen-Fehler beheben — Cloud-Konten in RcloneView erneut autorisieren"
authors:
  - tayson
description: "Ihr geplantes Backup hat aufgehört zu funktionieren, weil das OAuth-Token abgelaufen ist. So diagnostizieren und beheben Sie abgelaufene Tokens für Google Drive, OneDrive, Dropbox und andere OAuth-Anbieter in RcloneView."
keywords:
  - oauth token expired
  - rclone token expired
  - google drive token refresh
  - onedrive oauth expired
  - fix cloud auth error
  - rclone re-authorize
  - cloud sync authentication
  - oauth refresh token
  - fix cloud connection
  - rcloneview re-auth
tags:
  - RcloneView
  - troubleshooting
  - cloud-storage
  - tips
  - security
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# OAuth-Token-abgelaufen-Fehler beheben — Cloud-Konten in RcloneView erneut autorisieren

> Ihr nächtliches Backup schlägt seit zwei Wochen stillschweigend fehl. Der Fehler: „token expired". Ihre Verbindung zu Google Drive, OneDrive oder Dropbox benötigt lediglich eine erneute Autorisierung — hier erfahren Sie, wie Sie das beheben.

OAuth-Tokens verbinden RcloneView mit Cloud-Anbietern wie Google Drive, OneDrive, Dropbox und Box. Diese Tokens unterliegen Ablaufregeln — Google-Tokens sind zeitlich unbegrenzt gültig, können aber widerrufen werden, Microsoft-Tokens laufen ab, wenn sie 90 Tage nicht genutzt werden, und Passwortänderungen oder Sicherheitsvorfälle machen alle Tokens ungültig. Wenn sie ablaufen, schlagen Synchronisationsjobs stillschweigend fehl, bis Sie es bemerken.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Häufige Ursachen für abgelaufene Tokens

| Anbieter | Token-Verhalten |
|----------|---------------|
| Google Drive | Refresh-Token gültig bis zum Widerruf (kann aber vom Benutzer oder Administrator widerrufen werden) |
| OneDrive | 90 Tage bei Nichtnutzung; Passwortänderung macht es ungültig |
| Dropbox | Gültig bis zum expliziten Widerruf |
| Box | 60 Tage ohne Aktualisierung |

## Symptome

- Geplante Jobs schlagen mit „authentication"- oder „token"-Fehlern fehl
- Manuelles Durchsuchen zeigt „unauthorized"-Meldungen
- Der Job-Verlauf zeigt in den letzten Tagen zunehmende Fehlschläge

## So beheben Sie das Problem

### Zuerst den Job-Verlauf prüfen

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Identify auth errors" class="img-large img-center" />

Achten Sie auf Muster — wenn alle Jobs für einen Anbieter am selben Datum zu scheitern begannen, handelt es sich um ein Token-Problem.

### Den Remote erneut autorisieren

Öffnen Sie den Remote-Manager und autorisieren Sie den betroffenen Remote erneut. Dies löst einen neuen OAuth-Flow aus — melden Sie sich beim Anbieter an und gewähren Sie den Zugriff erneut.

<img src="/support/images/en/blog/new-remote.png" alt="Re-authorize remote" class="img-large img-center" />

Ihre bestehenden Job-Konfigurationen bleiben erhalten. Nur das Authentifizierungstoken wird aktualisiert.

### Die Behebung überprüfen

Führen Sie eine Test-Synchronisation aus, um zu bestätigen, dass die Verbindung funktioniert:

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Test after re-auth" class="img-large img-center" />

## Vorbeugung

- **Benachrichtigungen aktivieren** — Slack-/Discord-/Telegram-Alarme informieren Sie sofort, wenn ein Job fehlschlägt
- **Job-Verlauf wöchentlich prüfen** — Fehlschläge erkennen, bevor sie sich häufen
- **Passwortänderungen vermeiden**, ohne die Cloud-Remotes erneut zu autorisieren
- **Service-Konten verwenden** für Google Workspace (diese laufen nicht wie Benutzer-Tokens ab)

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Job-Verlauf prüfen** auf authentifizierungsbezogene Fehlschläge.
3. **Betroffene Remotes** im Remote-Manager **erneut autorisieren**.
4. **Benachrichtigungen einrichten**, um zukünftige Fehlschläge frühzeitig zu erkennen.

Eine 2-minütige erneute Autorisierung verhindert wochenlang verpasste Backups.

---

**Verwandte Anleitungen:**

- [Zugriff-verweigert-Fehler beheben](https://rcloneview.com/support/blog/fix-permission-denied-cloud-sync-errors-rcloneview)
- [Rclone-Fehler beheben](https://rcloneview.com/support/blog/troubleshoot-rclone-errors-rcloneview)
- [Slack-Benachrichtigungen](https://rcloneview.com/support/blog/automate-cloud-sync-slack-notifications-rcloneview)

<CloudSupportGrid />
