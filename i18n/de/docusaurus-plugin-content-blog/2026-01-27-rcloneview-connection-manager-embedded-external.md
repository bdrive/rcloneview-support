---
slug: rcloneview-connection-manager-embedded-external
title: "RcloneView Connection Manager: Zwischen eingebettetem und externem rclone wechseln für sicherere Cloud-Operationen"
authors:
  - tayson
description: "Nutzen Sie den RcloneView Connection Manager, um zwischen eingebetteten und externen rclone-Instanzen zu wechseln, Umgebungen zu isolieren und sicherere, überprüfbare Workflows auszuführen."
keywords:
  - rcloneview connection manager
  - embedded rclone
  - external rclone
  - rclone rcd gui
  - rcloneview remote control
  - rclone instance switch
  - cloud automation gui
  - rcloneview workflow
  - rclone gui
  - rcloneview enterprise
tags:
  - sync
  - file-management
  - job-management
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView Connection Manager: Zwischen eingebettetem und externem rclone wechseln für sicherere Cloud-Operationen

> Benötigen Sie eine klare Trennung zwischen persönlichen Jobs, Produktionsdaten und Testumgebungen? Mit dem RcloneView Connection Manager wechseln Sie rclone-Instanzen in Sekunden -- ganz ohne CLI-Risiko.

RcloneView enthält eine eingebettete rclone-Engine, verbindet sich aber auch mit externen rclone-Instanzen (lokal, remote oder in einem Container). So können Sie Umgebungen sicher isolieren, Änderungen testen und im Enterprise-Maßstab arbeiten, ohne Konfigurationen neu zu schreiben oder mit Terminals zu jonglieren.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Warum der Connection Manager wichtig ist

Die meisten rclone-Nutzer stoßen früher oder später auf eines dieser Probleme:

- Ein Testlauf verändert Produktions-Remotes
- Eine Maschine benötigt andere Zugangsdaten als eine andere
- Sie möchten, dass ein Remote-Server Übertragungen durchführt, während Ihr PC sauber bleibt

Der Connection Manager löst dies, indem Sie mit einem einzigen Klick zwischen **eingebetteten** und **externen** rclone-Instanzen wechseln können.

## Eingebettetes vs. externes rclone (kurzes Grundmodell)

- **Eingebettetes rclone**: mitgeliefert, lokal und immer verfügbar
- **Externes rclone**: vom Nutzer verwaltet, kann auf einem Server, NAS oder einer separaten Maschine laufen

Dies ist die Grundlage für sichere Workflows: Umgebungen isolieren, statt sie zu vermischen.

<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-advanced/embedded-rclone-model.png" alt="Embedded rclone model" class="img-large img-center" />
<img src="/support/images/en/howto/rcloneview-advanced/external-rclone-model.png" alt="External rclone model" class="img-large img-center" />
</div>

## Was der Connection Manager leistet

Mit dem Connection Manager können Sie:

- Alle verfügbaren rclone-Instanzen einsehen
- Sich jeweils mit einer verbinden
- Sofort zwischen eingebettet und extern wechseln
- Konfigurationen pro Instanz isoliert halten

<img src="/support/images/en/howto/rcloneview-basic/connection-manager-with-embedded-rclone-only.png" alt="Connection Manager with embedded rclone" class="img-large img-center" />

## Warum das ein besonders wertvoller Workflow für Teams ist

### 1) Sichereres Testen und Validieren

Nutzen Sie eine externe Instanz, um Änderungen zu testen, ohne Produktions-Remotes zu berühren.

### 2) Saubere Trennung von Umgebungen

Betreiben Sie eine Instanz für Staging und eine andere für Produktion. Keine vermischten Konfigurationen.

### 3) Remote-Rechenleistung für umfangreiche Übertragungen

Lassen Sie einen Server oder ein NAS große Übertragungen übernehmen, während Ihr Desktop schlank bleibt.

### 4) Schnellere Wiederherstellung nach Fehlern

Wenn eine externe Instanz ausfällt oder sich fehlerhaft verhält, wechseln Sie sofort zurück zu Embedded.

## Schritt für Schritt: Eine externe rclone-Verbindung hinzufügen

1) Öffnen Sie **Settings -> Connection Manager**.
2) Klicken Sie auf **New Connection**.
3) Geben Sie die Remote-Adresse für `rclone rcd` ein.

<img src="/support/images/en/howto/rcloneview-basic/new-connection-form.png" alt="New connection form" class="img-large img-center" />

Nach dem Hinzufügen können Sie den Eintrag verbinden, bearbeiten oder löschen.

<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-basic/external-rclone-added.png" alt="External rclone added" class="img-large img-center" />
<img src="/support/images/en/howto/rcloneview-basic/external-rclone-selected.png" alt="External rclone selected" class="img-large img-center" />
</div>

Anleitung: [/support/howto/rcloneview-basic/connection-manager](/howto/rcloneview-basic/connection-manager)

## Typische Anwendungsfälle

### Trennung von privat und geschäftlich

Bewahren Sie private Remotes in Embedded auf, geschäftliche Remotes in External.

### Serverseitige Übertragungen

Betreiben Sie rclone auf einem Server (EC2, NAS oder Docker). Nutzen Sie RcloneView als UI-Steuerung.

### Mehrfenster-Betrieb

Öffnen Sie ein neues RcloneView-Fenster, um eine weitere Instanz zu verwalten, ohne zu wechseln.

<img src="/support/images/en/howto/rcloneview-advanced/rcloneview-new-window.png" alt="Open new RcloneView window" class="img-large img-center" />

## Best Practices für zuverlässige Workflows

- Benennen Sie externe Instanzen eindeutig (z. B. `Prod-Rclone`, `Lab-Rclone`).
- Halten Sie Job-Zeitpläne an die richtige Instanz gebunden.
- Nutzen Sie Compare vor Sync, wenn Sie zwischen Umgebungen wechseln.
- Dokumentieren Sie, welche Remotes in welcher Instanz liegen.

## Häufige Fehler, die Sie vermeiden sollten

- Produktions-Jobs auf einer Testinstanz ausführen
- Eine externe Instanz für nicht zusammenhängende Teams gemeinsam nutzen
- Vergessen, welche Instanz gerade aktiv ist

Der Connection Manager behebt die meisten dieser Probleme durch visuellen Kontext und schnellen Wechsel.

## Fazit

Der RcloneView Connection Manager macht aus rclone ein sicheres Multi-Umgebungs-System. Embedded eignet sich perfekt für den täglichen Gebrauch. External ist ideal für Isolation, serverseitige Übertragungen und Enterprise-Workflows. Wechseln Sie bei Bedarf und halten Sie den Betrieb sauber.

<CloudSupportGrid />
