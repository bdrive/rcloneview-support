---
slug: rclone-chunker-split-large-files-cloud-rcloneview
title: "Rclone Chunker Remote — Große Dateien für jeden Cloud-Speicher aufteilen in RcloneView"
authors:
  - tayson
description: "Nutzen Sie den virtuellen Chunker-Remote von rclone in RcloneView, um große Dateien aufzuteilen und zu Cloud-Anbietern mit strengen Dateigrößenlimits hochzuladen."
keywords:
  - rclone chunker
  - split large files cloud
  - chunker remote RcloneView
  - large file upload limit
  - cloud file size limit workaround
  - rclone chunker guide
  - split file upload cloud
  - virtual remote chunker
  - rclone virtual remote
  - large file cloud storage
tags:
  - feature
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Rclone Chunker Remote — Große Dateien für jeden Cloud-Speicher aufteilen in RcloneView

> Wenn das Dateigrößenlimit eines Cloud-Anbieters Ihren Upload blockiert, teilt der virtuelle Chunker-Remote von rclone Dateien transparent auf — RcloneView konfiguriert und nutzt ihn ohne jede CLI.

Viele Cloud-Speicher-Anbieter setzen strenge Dateigrößenlimits pro Datei durch — Dropbox begrenzt Uploads auf 50 GB pro Datei, und manche kostenlosen oder günstigen Tarife erzwingen Limits von 5–10 GB. Für Nutzer, die Datenbank-Dumps, unkomprimierte Video-Exporte oder große Archivdateien speichern, die diese Grenzen überschreiten, bietet der virtuelle **Chunker**-Remote von rclone die Lösung: Er teilt Dateien vor dem Upload in kleinere Teile (Chunks) auf und setzt sie beim Download transparent wieder zusammen. RcloneView konfiguriert und nutzt Chunker über seine übliche Remote-Verwaltungsoberfläche.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Was ist der Chunker-Remote?

Chunker ist einer der **virtuellen Remote-Wrapper** von rclone — eine Schicht, die verändert, wie Dateien verarbeitet werden, bevor sie das eigentliche Cloud-Backend erreichen. Anders als Standard-Remotes, die sich direkt mit einem Cloud-Anbieter verbinden, fängt Chunker Dateien ab, die ein konfiguriertes Größenlimit überschreiten, und teilt sie vor dem Upload in mehrere Teile auf. Jeder Chunk wird als separate Datei mit einer Namenskonvention gespeichert, die rclone erkennt, um sie beim Lesen oder Herunterladen über denselben Chunker-Remote transparent wieder zusammenzusetzen.

<img src="/support/images/en/blog/new-remote.png" alt="Creating a Chunker virtual remote in RcloneView" class="img-large img-center" />

In RcloneView werden virtuelle Remotes wie Chunker über denselben Workflow **Remote-Tab > Neuer Remote** erstellt wie Standard-Remotes — Sie wählen Chunker als Anbieter aus, geben den Basis-Remote an und konfigurieren die Chunk-Größe. Das Ergebnis erscheint im Explorer neben Ihren anderen Remotes, wobei das transparente Chunking für Ihren Workflow unsichtbar bleibt.

## Einen Chunker-Remote in RcloneView erstellen

1. Stellen Sie zunächst sicher, dass Ihr Basis-Remote bereits konfiguriert ist (zum Beispiel Ihr Dropbox- oder OneDrive-Remote).
2. Gehen Sie zu **Remote-Tab > Neuer Remote** und wählen Sie **Chunker** aus dem Bereich für virtuelle Remotes.
3. Geben Sie den **zugrunde liegenden Remote** (Ihren bereits konfigurierten Basis-Remote) und optional ein Unterverzeichnis darin an.
4. Legen Sie die **Chunk-Größe** unterhalb des Dateigrößenlimits Ihres Anbieters fest — zum Beispiel 4 GB für die meisten Anbieter oder 45 GB für Dropbox, um unter dem Limit von 50 GB zu bleiben.
5. Speichern Sie den Chunker-Remote — er erscheint nun im Explorer wie jeder andere Remote.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Using a Chunker remote for large file uploads in RcloneView" class="img-large img-center" />

Wenn Sie eine 30-GB-Videodatei auf den Chunker-Remote ziehen, lädt RcloneView sie als mehrere Chunks hoch (zum Beispiel acht 4-GB-Dateien) in die zugrunde liegende Cloud. Beim Zurücklesen der Datei über denselben Chunker-Remote wird sie transparent wieder zusammengesetzt — Ihre Anwendung sieht eine durchgängige Datei.

## Praktische Anwendungsfälle

Ein Data Engineer, der nächtlich 20-GB-Datenbank-Dumps zu einem Cloud-Dienst mit einem Dateilimit von 10 GB archiviert, erstellt einen Chunker-Remote, der diesen Dienst mit 8-GB-Chunks umschließt. Der Synchronisationsjob im Job-Manager läuft genauso wie jede andere Cloud-Übertragung — das Chunking ist für die Job-Konfiguration völlig transparent.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling large file uploads via Chunker remote in RcloneView" class="img-large img-center" />

**Die Kombination von Chunker mit Crypt** ergibt einen fortgeschrittenen Stack aus virtuellen Remotes: Umschließen Sie zunächst Ihren Basis-Remote mit **Crypt** (für Ende-zu-Ende-Verschlüsselung) und dann den Crypt-Remote mit **Chunker** (zum Aufteilen). Das Ergebnis: Chunks werden vor dem Upload verschlüsselt, und der Anbieter sieht nur undurchsichtige, verschlüsselte Datenblöcke, die in größenbegrenzte Teile aufgeteilt sind. Dies ist ein ausgezeichneter Ansatz für sensible große Dateien bei jedem Cloud-Anbieter — RcloneView verwaltet beide Schichten über seine Standard-Remote-Verwaltung, ganz ohne CLI.

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Fügen Sie Ihren Basis-Cloud-Remote (den Anbieter mit Dateigrößenlimits) als Standard-Remote hinzu.
3. Gehen Sie zu **Remote-Tab > Neuer Remote**, wählen Sie **Chunker** und geben Sie Ihren Basis-Remote sowie die Chunk-Größe an.
4. Übertragen Sie große Dateien über den Chunker-Remote — Aufteilung und Zusammensetzung erfolgen transparent.

Chunker erschließt Cloud-Speicher für große Dateien bei Anbietern, die den Upload sonst ablehnen würden — ein leistungsstarker virtueller Remote für datenintensive Workflows, bei denen Dateigrößenlimits sonst Vorgänge blockieren würden.

---

**Verwandte Anleitungen:**

- [Virtuelle Remotes — Combine, Union, Alias mit RcloneView](https://rcloneview.com/support/blog/virtual-remotes-combine-union-alias-rcloneview)
- [Zero-CLI Crypt-Remote-Einrichtung mit RcloneView](https://rcloneview.com/support/blog/zero-cli-crypt-remote-rcloneview)
- [Fehler bei Cloud-Dateigrößenlimits beheben mit RcloneView](https://rcloneview.com/support/blog/fix-cloud-file-size-limit-errors-rcloneview)

<CloudSupportGrid />
