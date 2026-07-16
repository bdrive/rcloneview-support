---
slug: fix-cloud-oauth-token-expired-refresh-rcloneview
title: "Abgelaufene OAuth-Tokens für Cloud-Speicher beheben — Neu verbinden mit RcloneView"
authors:
  - tayson
description: "Erfahren Sie, wie Sie abgelaufene OAuth-Token-Fehler in RcloneView für Google Drive, Dropbox, OneDrive und andere OAuth-basierte Cloud-Anbieter diagnostizieren und beheben."
keywords:
  - abgelaufener OAuth-Token Cloud-Speicher
  - rclone OAuth-Token abgelaufen beheben
  - Google Drive Token abgelaufen RcloneView
  - Dropbox Autorisierungs-Token-Fehler
  - OneDrive Token-Aktualisierung rclone
  - Cloud-Speicher-Authentifizierungsfehler
  - rclone Cloud-Anbieter neu verbinden
  - abgelaufenen Cloud-Login RcloneView beheben
tags:
  - RcloneView
  - troubleshooting
  - tips
  - cloud-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Abgelaufene OAuth-Tokens für Cloud-Speicher beheben — Neu verbinden mit RcloneView

> OAuth-Tokens für Google Drive, Dropbox, OneDrive und andere Anbieter laufen regelmäßig ab. So erkennen Sie den Fehler in RcloneView und authentifizieren sich erneut, ohne Ihre Remote-Konfiguration zu verlieren.

OAuth-basierte Cloud-Anbieter — Google Drive, Dropbox, Microsoft OneDrive, Box, pCloud, Yandex Disk und andere — gewähren Zugriff über Tokens statt über Passwörter. Diese Tokens unterliegen Ablaufrichtlinien: Manche werden automatisch aktualisiert, solange die App aktiv bleibt, während andere nach 90–180 Tagen Inaktivität ablaufen oder wenn das Sicherheitssystem des Anbieters ungewöhnliche Zugriffsmuster erkennt. Wenn ein Token abläuft, beginnen die Synchronisationsjobs von RcloneView mit Authentifizierungsfehlern zu scheitern, die alarmierend aussehen, aber leicht zu beheben sind.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Abgelaufene Token-Fehler erkennen

Abgelaufene OAuth-Token-Fehler erscheinen im **Log-Tab** von RcloneView mit Meldungen wie:

- Google Drive: `oauth2: cannot fetch token: 401 Unauthorized` oder `Token has been expired or revoked`
- Dropbox: `invalid_grant` oder `Token is expired`
- OneDrive: `AADSTS70008: The refresh token has expired`
- Box: `401 Unauthorized: The access token provided has expired`

Der Übertragungstab zeigt Jobs, die sofort bei 0 % scheitern, ohne dass Dateien übertragen wurden. Der Remote kann im Explorer-Panel auch als nicht erreichbar angezeigt werden — das Durchsuchen des Remotes liefert einen Fehler statt der Ordnerauflistung.

<img src="/support/images/en/blog/new-remote.png" alt="Viewing remote configuration in RcloneView to fix token errors" class="img-large img-center" />

## Erneute Authentifizierung über den Remote-Manager

Um ein abgelaufenes OAuth-Token zu aktualisieren, gehen Sie zu **Remote-Tab → Remote-Manager**, wählen Sie den betroffenen Remote aus und klicken Sie auf **Bearbeiten**. Suchen Sie im Konfigurationsbildschirm des Remotes den OAuth-Token-Bereich und klicken Sie auf die Schaltfläche zur erneuten Authentifizierung (oder löschen Sie das vorhandene Token). RcloneView öffnet die OAuth-Autorisierungsseite des Anbieters in Ihrem Browser.

Melden Sie sich mit Ihren Cloud-Konto-Zugangsdaten an, gewähren Sie RcloneView (über rclone) erneut Zugriff, und das neue Token wird automatisch gespeichert. Schließen Sie den Browser-Tab und kehren Sie zu RcloneView zurück — der Remote sollte nun erfolgreich verbinden. Testen Sie dies, indem Sie den Remote im Explorer-Panel durchsuchen.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring reconnected cloud remote transfer in RcloneView" class="img-large img-center" />

## Anbieter mit strengeren Token-Richtlinien

**Google Drive** Refresh-Tokens bleiben unbegrenzt gültig, solange die App vom Kontoinhaber autorisiert ist und der rclone-App-Zugriff nicht in den Google-Sicherheitseinstellungen widerrufen wurde. Wenn Sie den Zugriff unter Google-Konto → Apps von Drittanbietern widerrufen haben, müssen Sie die Autorisierung von Grund auf neu durchführen.

**Microsoft OneDrive**-Tokens laufen nach 90 Tagen Inaktivität ab. Wenn Sie seit drei Monaten nicht synchronisiert haben, müssen Sie sich erneut authentifizieren. OneDrive-for-Business-Tokens können aufgrund organisatorischer Richtlinien, die vom Azure-AD-Administrator festgelegt wurden, auch früher ablaufen.

**Box**- und **Dropbox**-Tokens sind im Allgemeinen langlebig, laufen jedoch ab, wenn Sie Ihr Kontopasswort ändern, die Zwei-Faktor-Authentifizierung erstmals aktivieren oder wenn der Anbieter ein Sicherheitsereignis erkennt.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing failed jobs due to token expiry in RcloneView job history" class="img-large img-center" />

## Zukünftige Unterbrechungen vermeiden

Planen Sie mindestens einen kleinen Synchronisationsjob für jeden OAuth-Remote, der wöchentlich ausgeführt wird, auch wenn dabei nichts übertragen wird. Aktive Token-Nutzung verhindert bei Anbietern wie OneDrive einen durch Inaktivität ausgelösten Ablauf. Überprüfen Sie regelmäßig den Job-History-Tab, damit Job-Fehler umgehend erkannt werden, anstatt tagelang unbemerkt zu bleiben.

## Erste Schritte

1. **Laden Sie RcloneView** von [rcloneview.com](https://rcloneview.com/src/download.html) herunter.
2. Überprüfen Sie nach einem fehlgeschlagenen Synchronisationsjob den Log-Tab auf OAuth-Ablauf-Fehlermeldungen.
3. Öffnen Sie den Remote-Manager, wählen Sie den betroffenen Remote aus und klicken Sie auf Bearbeiten, um sich erneut zu authentifizieren.
4. Testen Sie die Verbindung im Explorer-Panel, bevor Sie fehlgeschlagene Jobs erneut ausführen.

Die OAuth-Token-Erneuerung dauert in RcloneView weniger als zwei Minuten — nach der erneuten Authentifizierung funktionieren alle zuvor konfigurierten Synchronisationsjobs ohne weitere Änderungen wieder.

---

**Verwandte Anleitungen:**

- [Google Drive-Kontingent- und Ratenlimit-Fehler mit RcloneView beheben](https://rcloneview.com/support/blog/fix-google-drive-quota-rate-limit-api-errors)
- [Rclone-Fehler mit RcloneView beheben](https://rcloneview.com/support/blog/troubleshoot-rclone-errors-rcloneview)
- [Benachrichtigungen für abgeschlossene Synchronisationen mit RcloneView](https://rcloneview.com/support/blog/notification-alerts-sync-complete-rcloneview)

<CloudSupportGrid />
