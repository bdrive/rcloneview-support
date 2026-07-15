---
id: wsbi2b5c92
title: Wasabi 화이트 라벨 익스플로러 (프리뷰)
description: RcloneView 기반의 완전한 브랜드 커스터마이징 Wasabi Explorer 데스크톱 경험 비공개 프리뷰.
hide_title: true
hide_table_of_contents: true
unlisted: true
---
<meta name="robots" content="noindex" />

# Wasabi 화이트 라벨 익스플로러 (프리뷰)

이 페이지는 RcloneView를 사용자를 위한 완전한 브랜드 커스터마이징 **Wasabi Explorer** 데스크톱 애플리케이션으로 제공하는 방법에 대한 비공개 프리뷰입니다.

이 화이트 라벨 제안의 목표는 다음과 같습니다:

- **Wasabi 브랜드를 제품 전체에서 전면에 내세웁니다**.
- 설치 직후 **사용자가 손쉽게 Wasabi 계정을 연결할 수 있도록** 합니다.
- 모든 관리 및 탐색 워크플로에서 **Wasabi가 최우선 선택지**가 되도록 합니다.
- Wasabi 브랜드 배포에 특화된 **우선 지원 및 유지보수**를 제공합니다.

---

## 1. 브랜드 키트 및 비주얼 통합

Wasabi가 제품 전반에 걸쳐 주요하고 눈에 띄는 브랜드가 되도록 브랜드 키트를 제공합니다. 모든 RcloneView 브랜딩은 제거되거나 법적으로 필요한 경우(예: 내부 버전 문자열)에만 유지됩니다.

주요 요소:

- 애플리케이션 이름을 **"Wasabi Explorer"**(또는 합의된 다른 명칭)로 설정.
- 모든 RcloneView 로고를 **Wasabi 로고**로 교체:
  - 데스크톱 바로가기 및 작업 표시줄 아이콘.
  - 설치 프로그램 아이콘.
  - 앱 내 헤더 및 창 아이콘.
- 적절한 경우 Wasabi 브랜드 팔레트에 맞게 색상 강조 조정.


<img src="/support/images/en/howto/remote-storage-connection-settings/wasabi-brandkit-example.png" alt="wasabi brandkit example" class="img-large img-center" />

---

## 2. 설치 후 Wasabi 리모트 마법사

설치 직후, 사용자는 별도의 설정 단계 없이 서비스를 바로 사용할 수 있도록 Wasabi 계정을 연결하는 과정으로 안내됩니다.

주요 동작:

- 설치 마법사가 끝나면 앱을 실행할 때 기본 온보딩 플로우로 **"Wasabi 리모트 추가"**가 열립니다.
- 마법사는 Wasabi에 맞게 단순화 및 사전 구성되어 있습니다:
  - 프로바이더 유형이 **Wasabi**로 미리 선택되어 있습니다.
  - 기본적으로 Wasabi 전용 옵션만 표시됩니다.
  - 고급 옵션은 **"고급 옵션 표시"** 링크 뒤에서 계속 사용할 수 있습니다.

<img src="/support/images/en/howto/remote-storage-connection-settings/post-install-wasabi-remote-wizard.png" alt="post install wasabi remote wizard" class="img-large img-center" />


### 홈 화면 빠른 액세스 마법사

사용자가 초기 연결을 건너뛰거나 마법사를 닫은 경우:

- 홈 화면 오른쪽 패널에 **큰 Wasabi 타일**이 표시됩니다.
- 타일을 클릭하면 언제든지 **"Wasabi 리모트 추가"** 마법사가 다시 열립니다.

<img src="/support/images/en/howto/remote-storage-connection-settings/on-home-quick-access-wizard-for-wasabi.png" alt="on home quick access wizard for wasabi" class="img-large img-center" />

이를 통해 신규 사용자와 재방문 사용자 모두에게 Wasabi 연결이 항상 가장 눈에 띄는 다음 행동으로 유지됩니다.

---

## 3. Wasabi 우선 탐색 및 관리

Wasabi 리모트가 추가되면, UI는 모든 주요 탐색 및 관리 화면에서 Wasabi가 눈에 띄게 유지되도록 최적화됩니다.

### 3.1 재실행 시 고정되는 Wasabi 패널

Wasabi 리모트가 구성된 이후:

- 이후 실행 시 UI는 기본적으로 **Wasabi 패널이 고정된 상태**로 열립니다.
- 일반적인 레이아웃:
  - 왼쪽: 로컬 디스크 또는 다른 소스.
  - 오른쪽: 사용자의 **MYWasabi** 리모트.
- 사용자는 드래그 앤 드롭으로 패널을 자유롭게 재배치할 수 있으므로, Wasabi 패널은 선호하는 워크플로에 따라 왼쪽과 오른쪽 사이에서 이동될 수 있습니다.
- 이를 통해 Wasabi 패널이 현재 어느 쪽에 있든 관계없이 로컬 폴더와 Wasabi 간의 반복적인 동기화 또는 복사 작업을 원클릭으로 수행할 수 있습니다.

<img src="/support/images/en/howto/remote-storage-connection-settings/wasabi-panel-pinned-on-re-launch.png" alt="wasabi panel pinned on re launch" class="img-large img-center" />


### 3.2 "새 리모트" 및 "리모트 관리자"에서 Wasabi 우선 표시

Wasabi를 주요 스토리지 프로바이더로 강조하기 위해:

- **새 리모트** 대화상자에서:
  - Wasabi가 **프로바이더 목록 맨 위**에 표시됩니다.
  - Wasabi 타일은 선택을 유도하기 위해 시각적으로 강조 표시됩니다.
- **리모트 관리자**에서:
  - Wasabi 리모트(예: `MYWasabi`)가 **리모트 목록 맨 위**에 표시됩니다.
  - 목록 보기와 카드 보기 모두에서 Wasabi 리모트는 더 빠른 접근을 위해 시각적으로 강조됩니다.

<img src="/support/images/en/howto/remote-storage-connection-settings/wasabi-first-in-management-dialog.png" alt="wasabi first in management dialog" class="img-large img-center" />


---

## 4. Wasabi를 위한 우선 지원 및 유지보수

Wasabi 화이트 라벨 배포를 위해 전용 지원 및 유지보수 트랙을 제공합니다.

포함되는 서비스:

- **전용 문서**  
  - **Wasabi Explorer** 사용자를 위한 별도의 매뉴얼 페이지.  
  - Wasabi 연결, 동기화, 문제 해결을 위한 단계별 가이드.

- **우선 인시던트 처리**  
  - Wasabi 사용자 문제는 지원 대기열에서 우선 처리됩니다.  
  - Wasabi 사용자에게 영향을 미치는 심각한 인시던트(예: 연결 실패, 데이터 액세스 문제)에 대한 **긴급 대응**.

- **지속적인 제품 업데이트**  
  - 유지보수 계약의 일환으로 정기적인 데스크톱 클라이언트 업그레이드가 포함됩니다.  
  - 공동 승인 후 Wasabi 브랜딩 하에 새로운 RcloneView 기능을 출시할 수 있습니다.

---

## 5. 다음 단계

이 화이트 라벨 제품을 진행하고자 하시는 경우:

1. **브랜딩 정렬**
   - Wasabi 로고 사용 가이드라인과 브랜드 색상을 확정합니다.
   - 최종 제품명을 결정합니다(예: *Wasabi Explorer*).
2. **경험 정의**
   - 위에서 설명한 온보딩 플로우와 Wasabi 우선 동작을 검증합니다.
   - 기본 설정을 조정합니다(예: 기본 동기화 모드, 기본 마운트 경로).
3. **파일럿 빌드**
   - 내부 테스트를 위한 비공개 파일럿 빌드와 Wasabi 전용 문서를 제공합니다.

이 페이지와 해당 URL은 Wasabi 및 파트너 관계자만을 위한 것이며 공개 탐색이나 검색에는 노출되지 않습니다. 평가 및 파일럿 논의 중에는 직접 링크로 안전하게 공유할 수 있습니다.
