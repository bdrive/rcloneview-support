---
slug: multilingual-interface-9-languages-rcloneview
title: "Mehrsprachige Oberfläche — RcloneView in 9 Sprachen nutzen"
authors:
  - casey
description: "RcloneView wird mit 9 UI-Sprachen inklusive CJK-Unterstützung ausgeliefert, damit Cloud-Synchronisation und Mount-Workflows für globale Teams natürlich lesbar sind."
keywords:
  - RcloneView Spracheinstellungen
  - RcloneView mehrsprachige Oberfläche
  - Cloud-Speicher-App Sprachen
  - RcloneView Koreanisch Japanisch Chinesisch
  - RcloneView Sprache ändern
  - lokalisiertes Cloud-Sync-Tool
  - Noto Sans CJK-Unterstützung
  - internationale Cloud-Speicher-GUI
  - RcloneView UI-Einstellungen
tags:
  - RcloneView
  - feature
  - tips
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Mehrsprachige Oberfläche — RcloneView in 9 Sprachen nutzen

> Ein Cloud-Sync-Tool ist nur so nützlich wie das Team, das es tatsächlich lesen kann — die Oberfläche von RcloneView passt sich von Haus aus 9 Sprachen an.

Die Einführung eines Dateiverwaltungstools in einem verteilten Team bedeutet meist, dass jemand im Team Menüs in einer Sprache lesen muss, die ihm nicht liegt. RcloneView umgeht das, indem es vollständige UI-Übersetzungen liefert, statt sich auf die automatische Browser-Übersetzung oder eine reine Englisch-Version zu verlassen. Egal ob Ihr Team sich über Seoul, Paris oder São Paulo erstreckt — der Sync-Assistent, die Mount-Einstellungen und der Job Manager erscheinen alle in der jeweiligen Landessprache. RcloneView bindet 90+ Anbieter ein UND synchronisiert sie aus einem einzigen Fenster heraus, unter Windows, macOS und Linux — jetzt auch in der Sprache, die Ihr Team tatsächlich spricht.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Unterstützte Sprachen

RcloneView unterstützt derzeit Englisch, Koreanisch, Französisch, Deutsch, vereinfachtes Chinesisch, traditionelles Chinesisch, Japanisch, Spanisch und Indonesisch. Dabei handelt es sich nicht um eine partielle Übersetzungsschicht für ein paar Menüs — die Beschriftungen in Remote Manager, der Synchronisation (Sync), dem Ordnervergleich (Folder Compare) und den Settings sind vollständig lokalisiert, sodass nicht-englischsprachige Nutzer mitten im Workflow nicht bei halb übersetzten Dialogen raten müssen.

Speziell für CJK-Sprachen bringt die App Noto-Sans-Schriftartvarianten mit (Koreanisch, vereinfachtes Chinesisch, traditionelles Chinesisch, Japanisch), wodurch das bei Systemschriften ohne den passenden Zeichensatz häufige Problem der Tofu-Box-Darstellung vermieden wird.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="RcloneView-Oberfläche mit lokalisierten Menüoptionen" class="img-large img-center" />

## Sprache wechseln

Die Sprachauswahl befindet sich unter dem Settings-Tab > General > Language. Wählen Sie Ihre bevorzugte Sprache aus dem Dropdown-Menü aus, und die Oberfläche aktualisiert sich sofort — ein Neustart ist nicht erforderlich. Dadurch kann ein Support-Mitarbeiter in einer Region die Sitzung eines Kollegen vorübergehend auf dessen Sprache umstellen, gemeinsam eine Mount- oder Sync-Konfiguration durchgehen und danach wieder zurückwechseln.

Da die Einstellung pro Installation und nicht an ein Cloud-Konto gebunden ist, kann jedes Teammitglied RcloneView in der Sprache seiner Wahl ausführen, selbst wenn alle mit denselben freigegebenen Remotes verbunden sind.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Konfiguration einer Cloud-zu-Cloud-Übertragung mit lokalisierter Oberfläche" class="img-large img-center" />

## Warum das für Teams über mehrere Regionen wichtig ist

Sync-Jobs, Filterregeln und Mount-Konfigurationen bringen schon für sich genommen genug technische Details mit — kommt eine Sprachbarriere hinzu, steigt das Risiko eines falsch konfigurierten Filters oder einer falschen Sync-Richtung. Eine sauber lokalisierte Oberfläche sorgt dafür, dass ein Operations-Team in Tokio und ein IT-Administrator in Berlin dieselbe Sync-Einstellung „Modifying destination only" gegenüber „Bidirection" jeweils korrekt in ihrer eigenen Sprache lesen können, bevor sie einen Job ausführen, der Produktionsdateien betrifft.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Ausführen eines Sync-Jobs über eine lokalisierte RcloneView-Oberfläche" class="img-large img-center" />

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Öffnen Sie den Settings-Tab > General > Language.
3. Wählen Sie Ihre bevorzugte Sprache aus den 9 verfügbaren Optionen.
4. Richten Sie weiterhin Remotes, Sync-Jobs oder Mounts ein — die gesamte Oberfläche folgt Ihrer Auswahl.

Ein Tool, das das ganze Team tatsächlich mühelos lesen kann, wird auch gleich beim ersten Mal richtig konfiguriert.

---

**Weiterführende Anleitungen:**

- [Tastaturkürzel und Produktivitätstipps in RcloneView](https://rcloneview.com/support/blog/keyboard-shortcuts-productivity-rcloneview)
- [Dunkelmodus und Theme-Anpassung in RcloneView](https://rcloneview.com/support/blog/dark-mode-themes-customization-rcloneview)
- [RcloneView-Terminal — GUI- und CLI-Workflow gemeinsam](https://rcloneview.com/support/blog/rcloneview-terminal-gui-workflow)

<CloudSupportGrid />
