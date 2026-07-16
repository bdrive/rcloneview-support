---
slug: hasher-remote-integrity-cloud-backup-rcloneview
title: "Hasher Remote — Prüfsummen für Dateiintegrität zu jedem Cloud-Speicher in RcloneView hinzufügen"
authors:
  - robin
description: "Erfahren Sie, wie der Hasher-Remote von RcloneView Prüfsummenverifikation zu Cloud-Backends hinzufügt, die keine native Hash-Unterstützung bieten, und so jedes Backup vor stiller Beschädigung schützt."
keywords:
  - RcloneView Hasher remote
  - cloud file integrity verification
  - checksum cloud backup rcloneview
  - rclone hasher remote guide
  - verify cloud transfer integrity
  - cloud backup checksum validation
  - detect file corruption cloud sync
  - cloud storage data integrity rcloneview
  - hash verification cloud backup
  - rclone virtual remote hasher
tags:
  - feature
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Hasher Remote — Prüfsummen für Dateiintegrität zu jedem Cloud-Speicher in RcloneView hinzufügen

> Der virtuelle Hasher-Remote fügt Cloud-Backends, die dies nicht nativ unterstützen, unauffällig eine Prüfsummenverfolgung hinzu und macht so jede Synchronisation zu einer verifizierten, korruptionsresistenten Übertragung.

Nicht jeder Cloud-Speicher-Anbieter berechnet und speichert Datei-Prüfsummen. Anbieter, die sich beim Vergleich ausschließlich auf Dateigröße und Änderungszeitstempel verlassen, können stille Datenbeschädigungen übersehen — jene Art, die auftritt, wenn eine Datei vollständig übertragen wird, aber mit vertauschten Bits ankommt. Für Archivare, Systemadministratoren und Unternehmen mit Anforderungen an die Datenintegrität ist dies eine bedeutende Lücke. RcloneView unterstützt den Hasher-Remote von rclone, einen virtuellen Remote-Wrapper, der MD5, SHA-1 oder andere Hash-Verfolgung auf jedes bestehende Cloud-Backend legt, ohne zu ändern, wie Sie Dateien speichern oder abrufen.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Was ist der Hasher-Remote und warum ist er wichtig?

Der Hasher-Remote ist einer der virtuellen Remote-Typen von rclone — ein Wrapper, der vor einem bestehenden Remote sitzt und dessen Fähigkeiten erweitert. Konkret speichert der Hasher-Remote Prüfsummen zusammen mit Ihren Dateien und cacht Hash-Werte, sodass nachfolgende Synchronisationsvorgänge Dateien anhand ihres Inhalts vergleichen können, anstatt sich nur auf die Größe zu verlassen. Das ist besonders wichtig, wenn Sie mit Cloud-Anbietern synchronisieren, die keine nativen Hash-APIs bereitstellen, oder wenn Sie Beschädigungen auf Bit-Ebene erkennen müssen, die die Dateigröße nicht verändern würden.

Ein praktisches Beispiel: Ein Medienproduktionsunternehmen, das 4K-Video-Tagesmaterial auf einem WebDAV-basierten Speicherserver archiviert, hat keine native Hash-Unterstützung durch den Server. Ohne Prüfsummen vergleicht rclone Dateien nach Größe und Zeitstempel — aber eine subtil beschädigte Datei mit identischer Größe würde unverändert erscheinen. Das Einbetten des WebDAV-Remotes in einen Hasher-Remote fügt jeder Synchronisation einen Hash-Vergleich hinzu, erkennt die beschädigte Datei und markiert sie zur Überprüfung, bevor sie eine gute Kopie stillschweigend überschreibt.

<img src="/support/images/en/blog/new-remote.png" alt="Creating a Hasher virtual remote in RcloneView's New Remote wizard" class="img-large img-center" />

## Einrichten eines Hasher-Remotes in RcloneView

In RcloneView werden virtuelle Remotes wie Hasher über denselben Assistenten "Neuer Remote" erstellt wie jeder Cloud-Anbieter. Klicken Sie im Remote-Tab auf Neuer Remote und scrollen Sie dann zu den virtuellen Remote-Typen — dort finden Sie Hasher neben Crypt, Union, Combine und anderen. Wählen Sie den zugrunde liegenden Remote aus, den Sie umschließen möchten (zum Beispiel Ihren WebDAV- oder FTP-Server), wählen Sie die zu aktivierenden Hash-Algorithmen aus und speichern Sie. Der Hasher-Remote umschließt Ihr Backend transparent.

Nach dem Speichern erscheint der Hasher-Remote im Remote-Manager wie jeder andere Remote. Sie können ihn im Explorer-Panel öffnen, Dateien durchsuchen und Synchronisationsjobs dagegen ausführen. Die Hash-Datenbank wird automatisch gepflegt — RcloneView und rclone übernehmen die Verwaltung, und Sie interagieren mit dem Hasher-Remote genau so, wie Sie es mit dem zugrunde liegenden Speicher tun würden. Es sind keinerlei Änderungen an Ihrem Arbeitsablauf erforderlich.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Running a checksum-verified sync transfer using the Hasher remote in RcloneView" class="img-large img-center" />

## Integritätsgeprüfte Übertragungen durchführen

Aktivieren Sie bei konfiguriertem Hasher-Remote die Option **Enable checksum** in Schritt 2 (Erweiterte Einstellungen) des Synchronisationsjob-Assistenten von RcloneView. Dies weist rclone an, Dateien anhand zwischengespeicherter Hash-Werte zu vergleichen, anstatt nur nach Größe und Zeitstempel. Beim ersten Durchlauf werden Hashes berechnet und gespeichert. Nachfolgende Durchläufe vergleichen mit diesen gespeicherten Hashes und überspringen das erneute Hashen für Dateien, die sich nicht geändert haben — so bleiben Synchronisationszeiten auch bei großen Archiven schnell.

Die Dry-Run-Funktion funktioniert nahtlos mit Hasher-Remotes. Bevor Sie eine große Archivsynchronisation ausführen, führen Sie einen Testlauf durch, um genau zu sehen, welche Dateien basierend auf dem Hash-Vergleich kopiert, geändert oder übersprungen würden. Das ist von unschätzbarem Wert, bevor Sie Monate an archiviertem Filmmaterial überschreiben, und es kostet nichts — es werden keine Dateien verschoben, bis Sie bestätigen.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing files with checksum verification enabled in RcloneView" class="img-large img-center" />

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing integrity-verified backup runs completed in RcloneView" class="img-large img-center" />

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Klicken Sie im Remote-Tab auf Neuer Remote und wählen Sie Hasher aus dem Abschnitt für virtuelle Remotes.
3. Umschließen Sie Ihren bestehenden Cloud-Remote — WebDAV, FTP oder jedes Backend ohne native Prüfsummen — mit dem Hasher-Remote.
4. Erstellen Sie einen Synchronisationsjob, aktivieren Sie den Prüfsummenvergleich in Schritt 2 der erweiterten Einstellungen und führen Sie Ihr erstes integritätsgeprüftes Backup aus.

Der Schutz Ihrer Archive vor stiller Beschädigung erfordert nur wenige Minuten Einrichtung, und der Hasher-Remote macht diesen Schutz für jedes von RcloneView unterstützte Backend verfügbar.

---

**Verwandte Anleitungen:**

- [Integrität von Cloud-Dateien mit RcloneView prüfen und verifizieren](https://rcloneview.com/support/blog/check-verify-cloud-file-integrity-rcloneview)
- [Cloud-Backups mit dem Crypt-Remote in RcloneView verschlüsseln](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)
- [Virtuelle Remotes: Combine, Union und Alias in RcloneView](https://rcloneview.com/support/blog/virtual-remotes-combine-union-alias-rcloneview)

<CloudSupportGrid />
