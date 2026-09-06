---
slug: fix-google-cloud-storage-auth-errors-rcloneview
title: "Google Cloud Storage Authentifizierungsfehler beheben — Lösung mit RcloneView"
authors:
  - morgan
description: "Beheben Sie Google Cloud Storage Authentifizierungsfehler in RcloneView, von fehlenden Project Numbers bis zu abgelaufenen OAuth-Tokens."
keywords:
  - Google Cloud Storage Authentifizierungsfehler
  - GCS Authentifizierungsfehler beheben
  - Google Cloud Storage Project Number
  - GCS OAuth-Token abgelaufen
  - RcloneView Google Cloud Storage
  - Google Cloud Storage Zugriff verweigert
  - GCS Verbindungsfehler beheben
  - Cloud-Speicher Authentifizierung reparieren
tags:
  - RcloneView
  - troubleshooting
  - tips
  - google-cloud-storage
  - cloud-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Google Cloud Storage Authentifizierungsfehler beheben — Lösung mit RcloneView

> Die meisten Google Cloud Storage Authentifizierungsfehler in RcloneView lassen sich auf ein fehlendes Feld oder ein abgelaufenes Token zurückführen — so isolieren und beheben Sie beides.

Google Cloud Storage unterscheidet sich von einer persönlichen Google Drive-Verbindung: Es erfordert eine Project Number bei der Einrichtung des Remote, und das Berechtigungsmodell wird durch IAM-Rollen gesteuert statt durch einfache Kontofreigabe. Wenn eines von beiden falsch konfiguriert ist, wirft RcloneView einen Authentifizierungs- oder Berechtigungsfehler, sobald Sie versuchen, den Bucket zu durchsuchen. Dieser Leitfaden führt durch die häufigsten Ursachen und zeigt, wie Sie jede davon direkt in RcloneView beheben.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Ursache diagnostizieren

Authentifizierungsfehler bei einem Google Cloud Storage Remote lassen sich meist in drei Gruppen einteilen: eine fehlende oder falsche Project Number, die bei der Remote-Erstellung eingegeben wurde, ein OAuth-Token, das abgelaufen oder von der Google-Kontoseite widerrufen wurde, oder eine IAM-Rolle des Dienstkontos, die keinen Lese-/Schreibzugriff auf den Ziel-Bucket gewährt. Öffnen Sie zunächst den Remote Manager und prüfen Sie die Konfiguration des Remote — wenn das Feld Project Number leer ist oder nicht mit dem Projekt übereinstimmt, dem der Bucket gehört, ist das fast immer die Ursache.

<img src="/support/images/en/blog/new-remote.png" alt="Überprüfung der Google Cloud Storage Remote-Einstellungen im Remote Manager" class="img-large img-center" />

Wenn die Project Number korrekt aussieht, ist der nächste Verdächtige die OAuth-Sitzung selbst. Tokens können durch eine Passwortänderung, eine widerrufene App-Autorisierung in den Sicherheitseinstellungen Ihres Google-Kontos oder einfach durch Ablauf nach längerer Inaktivität ungültig werden.

## Erneute Authentifizierung und Korrektur der Projektkonfiguration

Um ein veraltetes Token zu beheben, bearbeiten Sie den Remote und führen den browserbasierten OAuth-Anmeldevorgang erneut aus — dadurch werden die Zugangsdaten aktualisiert, ohne dass der Remote von Grund auf neu erstellt werden muss. Bei einer nicht übereinstimmenden Project Number aktualisieren Sie das Feld mit der korrekten Projekt-ID aus der Google Cloud Console, speichern und stellen die Verbindung erneut her.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Erneute Authentifizierung eines Google Cloud Storage Remote nach einem Token-Fehler" class="img-large img-center" />

RcloneView bindet mehr als 90 Anbieter ein und synchronisiert sie aus einem einzigen Fenster unter Windows, macOS und Linux, sodass Sie nach dem erneuten Verbinden des Remote sofort jede unterbrochene Synchronisations- oder Einbindungsaufgabe fortsetzen können, ohne sonst etwas neu konfigurieren zu müssen. Bevor Sie einen großen Synchronisationsauftrag neu aufsetzen, nutzen Sie das integrierte Rclone Terminal, um `rclone about "yourremote:"` auszuführen — eine schnelle Methode, um zu bestätigen, dass die Korrektur funktioniert hat, bevor Sie eine reale Übertragung darauf verlassen.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Test einer Google Cloud Storage Verbindung vor Fortsetzung eines Synchronisationsauftrags" class="img-large img-center" />

## Wiederholte Fehler vermeiden

Wenn der Fehler nach einem bestimmten Zeitplan immer wieder auftritt, prüfen Sie, ob die zugrunde liegende Google Cloud IAM-Rolle zu eng gefasst wurde — eine Rolle, die nur Lesezugriff gewährt, authentifiziert sich zwar erfolgreich, schlägt aber bei jedem Upload- oder Löschvorgang fehl, was eher wie ein sporadischer Authentifizierungsfehler als wie eine Berechtigungslücke aussehen kann. Bei anhaltenden oder unklaren Fällen aktivieren Sie Enable rclone Logging in den Settings mit dem Log-Level DEBUG, reproduzieren Sie den Fehler und prüfen Sie die detaillierten Log-Einträge im Log-Tab, um genau zu bestimmen, welcher API-Aufruf abgelehnt wird.

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Öffnen Sie den Remote Manager und überprüfen Sie die Project Number Ihres Google Cloud Storage Remote.
3. Führen Sie die OAuth-Anmeldung erneut aus, wenn das Token abgelaufen ist, oder korrigieren Sie die Project Number bei einer Abweichung.
4. Bestätigen Sie die Korrektur mit `rclone about` im Terminal-Tab, bevor Sie Synchronisations- oder Backup-Aufgaben fortsetzen.

Eine fünfminütige Prüfung dieser beiden Einstellungen löst die überwiegende Mehrheit der Google Cloud Storage Authentifizierungsprobleme.

---

**Weitere Anleitungen:**

- [Google Cloud Storage Buckets verwalten — Sync und Backup mit RcloneView](https://rcloneview.com/support/blog/manage-google-cloud-storage-buckets-rcloneview)
- [Abgelaufenes OAuth-Token beheben — Cloud-Synchronisationsfehler mit RcloneView lösen](https://rcloneview.com/support/blog/fix-cloud-oauth-token-expired-refresh-rcloneview)
- [Amazon S3 mit Google Cloud Storage synchronisieren mit RcloneView](https://rcloneview.com/support/blog/sync-s3-to-google-cloud-storage-rcloneview)

<CloudSupportGrid />
