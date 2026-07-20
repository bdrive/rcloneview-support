---
id: pcld7a9f21
title: pCloud 화이트 라벨 탐색기 (프리뷰)
description: RcloneView 기반의 완전한 브랜드화된 pCloud 탐색기 데스크톱 경험을 미리 볼 수 있는 비공개 프리뷰입니다.
hide_title: true
hide_table_of_contents: true
unlisted: true
---
<meta name="robots" content="noindex" />

# pCloud 화이트 라벨 탐색기 (프리뷰)

이 페이지는 RcloneView가 사용자를 위한 완전한 브랜드화된 **pCloud 탐색기** 데스크톱 애플리케이션으로 어떻게 제공될 수 있는지 보여주는 비공개 프리뷰입니다.

이 화이트 라벨 제안의 목표는 다음과 같습니다:

- 제품 전체에서 **pCloud 브랜드를 전면에 부각**시킵니다.
- 설치 직후 **사용자가 손쉽게 pCloud 계정을 연결**할 수 있도록 합니다.
- 모든 관리 및 탐색 워크플로에서 **pCloud를 최우선 선택지**로 만듭니다.
- pCloud 브랜드 배포에 특화된 **우선 지원 및 유지보수**를 제공합니다.

---

## 1. 브랜드 키트 및 시각적 통합

제품 전반에서 pCloud가 주요하고 눈에 띄는 브랜드가 되도록 브랜드 키트를 제공합니다. 모든 RcloneView 브랜딩은 제거되거나, 법적으로 필요한 경우(예: 내부 버전 문자열)에만 유지됩니다.

주요 요소:

- 애플리케이션 이름이 **"pCloud 탐색기"** (또는 별도로 합의된 명칭)로 설정됩니다.
- 모든 RcloneView 로고가 **pCloud 로고**로 교체됩니다:
  - 데스크톱 바로가기 및 작업 표시줄 아이콘.
  - 설치 프로그램 아이콘.
  - 앱 내 헤더 및 창 아이콘.
- 적절한 경우 색상 강조가 pCloud의 브랜드 팔레트에 맞게 조정됩니다.

<img src="/support/images/en/howto/remote-storage-connection-settings/pcloud-brandkit-examples.png" alt="pcloud brandkit examples" class="img-large img-center" />


---

## 2. 설치 후 pCloud 리모트 마법사

설치 직후 사용자는 추가 설정 단계 없이 서비스를 바로 사용할 수 있도록 pCloud 계정을 연결하는 과정으로 안내됩니다.

주요 동작:

- 설정 마법사가 끝나면 앱을 실행할 때 기본 온보딩 흐름으로 **"pCloud 리모트 추가"**가 열립니다.
- 마법사는 pCloud에 맞게 단순화 및 사전 구성되어 있습니다:
  - 제공업체 유형이 **pCloud**로 미리 선택됩니다.
  - 기본적으로 pCloud 전용 옵션만 표시됩니다.
  - 고급 옵션은 **"고급 옵션 표시"** 링크 뒤에 계속 제공됩니다.

<img src="/support/images/en/howto/remote-storage-connection-settings/post-install-pcloud-remote-wizard.png" alt="post install pcloud remote wizard" class="img-large img-center" />

### 홈 화면의 빠른 접근 마법사

사용자가 초기 연결을 건너뛰거나 마법사를 닫은 경우:

- 홈 화면 우측 패널에 **큰 pCloud 타일**이 표시됩니다.
- 이 타일을 클릭하면 언제든지 **"pCloud 리모트 추가"** 마법사가 다시 열립니다.

<img src="/support/images/en/howto/remote-storage-connection-settings/on-home-quick-access-wizard.png" alt="on home quick access wizard" class="img-large img-center" />


이를 통해 신규 사용자나 재방문 사용자 모두에게 pCloud 연결이 항상 가장 눈에 띄는 다음 동작이 되도록 합니다.

---

## 3. pCloud 우선 탐색 및 관리

pCloud 리모트가 추가되면 UI는 모든 주요 탐색 및 관리 화면에서 pCloud가 눈에 잘 띄도록 최적화됩니다.

### 3.1 RcloneView 탐색기의 pCloud 드라이브

pCloud 리모트가 로컬 드라이브로 마운트되면:

- pCloud 드라이브(예: `pCloud Drive (P:/)`)가 **RcloneView 로컬 리모트 목록의 맨 위**에 표시됩니다.
- 이 드라이브는 다른 드라이브와 시각적으로 구분되도록 **pCloud 아이콘**을 사용합니다.

<img src="/support/images/en/howto/remote-storage-connection-settings/pcloud-first-in-explorer.png" alt="pcloud first in explorer" class="img-medium img-center" />

### 3.2 재실행 시 고정되는 pCloud 패널

pCloud 리모트가 구성된 이후:

- 이후 실행 시 UI는 기본적으로 **pCloud 패널이 고정된 상태**로 열립니다.
- 일반적인 레이아웃:
  - 왼쪽: 로컬 디스크 또는 다른 소스.
  - 오른쪽: 사용자의 **MYpCloud** 리모트.
- 이를 통해 로컬 폴더와 pCloud 간의 반복적인 동기화 또는 복사 작업을 원클릭으로 수행할 수 있습니다.

<img src="/support/images/en/howto/remote-storage-connection-settings/pcloud-panel-pinned-on-re-launch.png" alt="pcloud panel pinned on re launch" class="img-large img-center" />


### 3.3 "새 리모트" 및 "리모트 관리자"에서 pCloud 우선 표시

pCloud를 주요 스토리지 제공업체로 부각시키기 위해:

- **새 리모트** 대화상자에서:
  - pCloud가 **제공업체 목록의 맨 위**에 표시됩니다.
  - pCloud 타일은 선택을 유도하기 위해 시각적으로 강조됩니다.
- **리모트 관리자**에서:
  - pCloud 리모트(예: `MYpCloud`)가 **리모트 목록의 맨 위**에 표시됩니다.
  - 목록 보기와 카드 보기 모두에서 pCloud 리모트는 더 빠르게 접근할 수 있도록 시각적으로 강조됩니다.


<img src="/support/images/en/howto/remote-storage-connection-settings/pcloud-first-in-management-dialog.png" alt="pcloud first in management-dialog" class="img-large img-center" />

---

## 4. pCloud를 위한 우선 지원 및 유지보수

pCloud 화이트 라벨 배포를 위해 전용 지원 및 유지보수 트랙을 제공합니다.

포함된 서비스:

- **전용 문서**  
  - **pCloud 탐색기** 사용자만을 위한 별도의 매뉴얼 페이지.  
  - pCloud 연결, 동기화, 문제 해결을 위한 단계별 가이드.

- **우선 장애 처리**  
  - pCloud 사용자 이슈는 지원 대기열에서 우선 처리됩니다.  
  - pCloud 사용자에게 영향을 미치는 중대한 장애(예: 연결 실패, 데이터 접근 문제)에 대한 **긴급 대응**.

- **지속적인 제품 업데이트**  
  - 유지보수 계약의 일환으로 정기적인 데스크톱 클라이언트 업그레이드가 포함됩니다.  
  - 공동 승인 후 pCloud 브랜딩으로 새로운 RcloneView 기능을 출시할 수 있는 기능.

---

## 5. 다음 단계

이 화이트 라벨 제품을 진행하고자 하는 경우:

1. **브랜딩 정렬**
   - pCloud 로고 사용 지침 및 브랜드 색상을 확정합니다.
   - 최종 제품명을 결정합니다(예: *pCloud 탐색기*).
2. **경험 정의**
   - 위에서 설명한 온보딩 흐름 및 pCloud 우선 동작을 검증합니다.
   - 기본 설정을 조정합니다(예: 기본 동기화 모드, 기본 마운트 경로).
3. **파일럿 빌드**
   - 내부 테스트를 위한 비공개 파일럿 빌드와 pCloud 전용 문서를 제공합니다.

이 페이지와 해당 URL은 pCloud 및 파트너 이해관계자만을 위한 것이며, 공개 탐색이나 검색에는 표시되지 않습니다. 평가 및 파일럿 논의 중에는 직접 링크로 안전하게 공유할 수 있습니다.

