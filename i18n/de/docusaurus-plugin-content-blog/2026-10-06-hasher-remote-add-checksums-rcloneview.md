---
slug: hasher-remote-add-checksums-rcloneview
title: "Hasher-Remote — Prüfsummen für Speicher ohne Prüfsummen in RcloneView ergänzen"
authors:
  - steve
description: "Nutzen Sie das virtuelle Hasher-Remote in RcloneView, um Remotes ohne eigene Prüfsummen hashbasierte Integritätsprüfungen hinzuzufügen."
keywords:
  - rclone Hasher Remote
  - Prüfsummen zu Cloud-Speicher hinzufügen
  - Integritätsprüfung von Cloud-Dateien
  - Datei-Hashes in der Cloud verifizieren
  - virtuelles Hasher-Remote
  - virtuelle Remotes in RcloneView
  - Prüfsummen-Synchronisation
  - rclone GUI
tags:
  - RcloneView
  - feature
  - rclone
  - cloud-storage
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Hasher-Remote — Prüfsummen für Speicher ohne Prüfsummen in RcloneView ergänzen

> Das virtuelle Hasher-Remote ergänzt ein bestehendes Remote um Hashing, sodass Integritätsprüfungen auch dort funktionieren, wo der Speicher keine Prüfsummen bietet.

Manche Speicher-Backends können keine Datei-Hashes liefern, was Vergleiche und die Überprüfung nach einer Übertragung schwächt. RcloneView unterstützt das virtuelle Hasher-Remote von rclone, einen Wrapper, der Hashing über ein bereits vorhandenes Remote legt. Diese Anleitung zeigt, wann er hilft und wie Sie ihn verwenden.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Was das Hasher-Remote leistet

Virtuelle Remotes umschließen ein bestehendes Remote, um Verhalten hinzuzufügen. Alias verkürzt Pfade, Crypt verschlüsselt, und Hasher ergänzt Hashing für Integritätsprüfungen. Stellt ein Backend keine Prüfsummen bereit, fallen Vergleiche auf Größe und Änderungszeit zurück, wodurch Inhalte unbemerkt bleiben können, die sich geändert haben, ohne eines von beiden zu verändern.

Wenn Sie dieses Backend in ein Hasher-Remote einbetten, erhält es eine Hash-Fähigkeit, sodass der prüfsummenbasierte Vergleich etwas hat, womit er arbeiten kann. Es eignet sich für Archive und Backups, bei denen Korrektheit wichtiger ist als Geschwindigkeit.

<img src="/support/images/en/blog/new-remote.png" alt="Erstellen eines neuen virtuellen Remotes in RcloneView" class="img-large img-center" />

## Ein Hasher-Remote erstellen

Öffnen Sie den Tab Remote und wählen Sie New Remote, dann den Typ Hasher. Verweisen Sie auf das zugrunde liegende Remote und den Ordner, den Sie umschließen möchten, und vergeben Sie einen wiedererkennbaren Namen, etwa `archive-hashed`. Nach dem Speichern erscheint es im Explorer wie jedes andere Remote.

Verwenden Sie das umschlossene Remote überall dort, wo Sie das Original verwenden würden: zum Durchsuchen, Kopieren oder als Quelle bzw. Ziel einer Synchronisation. Beachten Sie, dass die Hashes an den Wrapper gebunden sind. Nutzen Sie daher für Daten, die verifiziert werden sollen, durchgängig das Hasher-Remote.

## Mit Synchronisation und Vergleich verwenden

Aktivieren Sie in den Advanced Settings eines Sync-Jobs **Enable checksum**, damit Dateien anhand von Hash und Größe verglichen werden. In Kombination mit einem Hasher-Remote liefert das verlässlichere Ergebnisse als Größe und Zeit allein.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder-Compare-Ansicht mit den Unterschieden zwischen zwei Ordnern" class="img-large img-center" />

Führen Sie zuerst einen Dry Run aus, um zu sehen, was kopiert oder gelöscht wird, und führen Sie den Job dann aus. RcloneView unterstützt Einbinden (Mount) und Synchronisation für über 90 Anbieter in einem Fenster unter Windows, macOS und Linux, sodass sich derselbe Verifizierungsansatz in all Ihren Clouds anwenden lässt.

## Ergebnisse im Job History prüfen

Öffnen Sie nach einem Lauf den Job History, um Status, übertragene Dateien und Gesamtgröße zu bestätigen. Meldet ein Job Fehler, zeigt der Tab Log die Details.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Jobverlauf mit abgeschlossenen Sync-Läufen" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Fügen Sie das Remote ohne Prüfsummen hinzu, falls noch nicht geschehen.
3. Erstellen Sie unter Remote > New Remote ein Hasher-Remote, das es umschließt.
4. Erstellen Sie einen Sync-Job mit aktiviertem **Enable checksum** und führen Sie zuerst einen Dry Run aus.

Eine stärkere Verifizierung bedeutet, dass Sie stille Abweichungen finden, bevor sie ein Problem werden.

---

**Weiterführende Anleitungen:**

- [Virtuelle Remotes — Combine, Union und Alias mit RcloneView](https://rcloneview.com/support/blog/virtual-remotes-combine-union-alias-rcloneview)
- [Prüfsummen-Abweichungen bei der Cloud-Synchronisation mit RcloneView beheben](https://rcloneview.com/support/blog/fix-cloud-sync-checksum-mismatch-rcloneview)
- [Fehlgeschlagene Cloud-Backup-Verifizierung mit RcloneView beheben](https://rcloneview.com/support/blog/fix-cloud-backup-verification-failures-rcloneview)

<CloudSupportGrid />
