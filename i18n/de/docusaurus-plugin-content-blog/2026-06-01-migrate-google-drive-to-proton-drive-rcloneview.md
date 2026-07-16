---
slug: migrate-google-drive-to-proton-drive-rcloneview
title: "Google Drive zu Proton Drive migrieren — Dateien sicher übertragen mit RcloneView"
authors:
  - kai
description: "Migrieren Sie Dateien von Google Drive zu Proton Drive mit RcloneView — dem GUI-Cloud-Übertragungstool, das die Privacy-Migration einfach und zuverlässig macht."
keywords:
  - migrate google drive to proton drive
  - google drive to proton drive transfer
  - privacy cloud storage migration
  - RcloneView cloud transfer tool
  - cloud-to-cloud file migration
  - proton drive migration tool
  - sync google drive to proton drive
  - move files from google drive to proton drive
  - secure cloud migration GUI
  - google drive privacy migration
tags:
  - google-drive
  - proton-drive
  - migration
  - cloud-to-cloud
  - privacy
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Google Drive zu Proton Drive migrieren — Dateien sicher übertragen mit RcloneView

> Verschieben Sie Ihre Dateien von Google Drive zu Proton Drive ohne Kommandozeile — und überprüfen Sie, dass jedes Byte sicher angekommen ist.

Datenschutzbewusste Nutzer wechseln zunehmend von Google Drive zu Proton Drive, um von Ende-zu-Ende-Verschlüsselung und der in der Schweiz ansässigen Datenhoheit zu profitieren. Ob Sie Journalist sind und Quellen schützen, ein Unternehmen mit sensiblen Kundendaten oder einfach jemand, der die Kontrolle über persönliche Dateien zurückgewinnen möchte — Gigabytes an Daten manuell zu verschieben ist unpraktisch. RcloneView bietet einen visuellen, GUI-basierten Workflow, um alle Ihre Dateien effizient und nachprüfbar zwischen den beiden Diensten zu übertragen.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Google Drive und Proton Drive in RcloneView verbinden

Google Drive wird über OAuth verbunden — klicken Sie im Remote-Tab auf **New Remote**, wählen Sie Google Drive aus und schließen Sie eine browserbasierte Anmeldung ab. Es sind keine API-Schlüssel oder manuelle Token-Verwaltung erforderlich; RcloneView übernimmt den OAuth-Ablauf automatisch.

Proton Drive benötigt Ihre E-Mail-Adresse, Ihr Passwort und optional einen Zwei-Faktor-Authentifizierungscode. Wählen Sie im New-Remote-Assistenten Proton Drive aus, geben Sie Ihre Anmeldedaten ein, und das eingebettete rclone-Backend von RcloneView stellt die Verbindung her. Die minimal unterstützte rclone-Version für Proton Drive ist v1.69+, die RcloneView standardmäßig mitliefert. Sobald beide Remotes in den Explorer-Panels erscheinen, können Sie Ihre Google-Drive- und Proton-Drive-Verzeichnisbäume nebeneinander durchsuchen.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Google Drive and Proton Drive as remotes in RcloneView" class="img-large img-center" />

## Mit Folder Compare vor der Migration prüfen

Bevor Sie die Übertragung starten, nutzen Sie die Funktion **Folder Compare** von RcloneView, um Quelle und Ziel zu prüfen. Starten Sie sie über den Home-Tab, richten Sie das linke Panel auf Ihr Google-Drive-Stammverzeichnis und das rechte Panel auf den Ziel-Ordner in Proton Drive. Die Vergleichsansicht hebt Dateien hervor, die nur links existieren (noch nicht migriert), Dateien, die nur rechts existieren, sowie etwaige Größenabweichungen.

Dieser Schritt ist besonders wertvoll bei der Fortsetzung einer unterbrochenen Migration: Sie sehen sofort, was bereits übertragen wurde, und können den Übertragungsjob nur auf das verbleibende Delta konzentrieren — so vermeiden Sie teure erneute Übertragungen von Daten, die bereits sicher angekommen sind.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare view showing Google Drive vs Proton Drive differences in RcloneView" class="img-large img-center" />

## Den Migrationsjob ausführen

Wenn die Remotes verbunden und die Ordner verglichen sind, öffnen Sie den **Job Manager** und erstellen einen neuen Copy- oder Sync-Job. Legen Sie Ihren Google-Drive-Ordner als Quelle und den entsprechenden Proton-Drive-Ordner als Ziel fest. Aktivieren Sie im Schritt Advanced Settings die Option **checksum**, um Dateien anhand des Hashwerts statt nur nach Größe zu vergleichen — das ist besonders wichtig bei Proton Drive, da das verschlüsselte Speicherformat dazu führen kann, dass von der API gemeldete Dateigrößen leicht abweichen.

Der Tab **Transferring** im unteren Panel zeigt den Übertragungsfortschritt in Echtzeit: Dateianzahl, übertragene Datenmenge und Übertragungsgeschwindigkeit. Wird der Job durch einen Netzwerkabbruch unterbrochen, führen Sie ihn einfach erneut aus — die Übertragungslogik von rclone überspringt bereits übereinstimmende Dateien und setzt dort fort, wo sie aufgehört hat.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Real-time cloud-to-cloud transfer progress between Google Drive and Proton Drive in RcloneView" class="img-large img-center" />

## Laufende Synchronisation während einer Übergangsphase planen

Wenn sich Ihr Team in einer schrittweisen Übergangsphase befindet und Kollegen weiterhin Dateien zu Google Drive hinzufügen, können Sie einen wiederkehrenden Sync-Job planen, um Proton Drive aktuell zu halten. Mit einer **PLUS**-Lizenz akzeptiert der Schritt Schedule im Job-Assistenten Regeln im Crontab-Stil — eine nächtliche Synchronisation um 2 Uhr sorgt beispielsweise dafür, dass neue Dateien automatisch und ohne manuellen Eingriff zu Proton Drive fließen.

Die **Job History** von RcloneView protokolliert jede Ausführung: Startzeit, Dauer, übertragene Dateien, Geschwindigkeit und Endstatus (Completed / Errored / Canceled). Damit erhalten Sie eine nachvollziehbare Aufzeichnung des gesamten Migrationsverlaufs und können leicht bestätigen, wann die Umstellung abgeschlossen ist.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History tab showing completed Google Drive to Proton Drive migration runs in RcloneView" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Klicken Sie auf **New Remote** und fügen Sie Google Drive über den OAuth-Browser-Login hinzu.
3. Klicken Sie erneut auf **New Remote** und fügen Sie Proton Drive mit Ihrer E-Mail-Adresse und Ihrem Passwort hinzu.
4. Nutzen Sie **Folder Compare**, um die Unterschiede zwischen beiden Seiten vorab zu prüfen.
5. Erstellen Sie einen Copy- oder Sync-Job mit aktivierter Checksumme und starten Sie die Übertragung.

Privacy-Migration muss nicht auf Komfort verzichten — RcloneView macht den Wechsel zu Proton Drive so unkompliziert wie jede andere Cloud-zu-Cloud-Übertragung.

---

**Verwandte Anleitungen:**

- [Proton Drive verwalten — Cloud-Synchronisation mit RcloneView](https://rcloneview.com/support/blog/manage-proton-drive-cloud-sync-rcloneview)
- [Eine Festplatte mit RcloneView auf Proton Drive sichern](https://rcloneview.com/support/blog/hard-drive-to-proton-drive-with-rcloneview)
- [Proton Drive mit anderen Clouds synchronisieren mit RcloneView](https://rcloneview.com/support/blog/sync-proton-drive-backup-other-clouds-rcloneview)

<CloudSupportGrid />
