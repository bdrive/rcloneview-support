---
sidebar_position: 4
description: "RcloneView의 고급 비교 기능을 사용하여 로컬 및 원격 폴더를 비교하고, 결과를 필터링하며, 파일을 직접 복사하거나 삭제하는 방법을 알아보세요."
keywords:
  - rcloneview
  - rclone
  - 폴더 비교
  - 폴더 복사
  - 파일 차이
  - 클라우드 동기화
  - 파일 관리
  - 파일 전송
  - 파일 탐색기
  - 리모트 스토리지 관리
tags:
  - RcloneView
  - compare
  - cloud-storage
  - folder-differences
  - Remote-storage-managent
date: 2025-05-30
author: Jay
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 폴더 내용 비교하기

RcloneView는 내장된 비교(Compare) 기능을 사용하여 로컬 디스크 또는 클라우드 리모트 간의 두 폴더 사이의 차이를 파악하고, 파일을 효율적으로 복사하거나 관리할 수 있도록 도와줍니다.

## 비교할 폴더 선택하기

폴더 비교를 시작하려면:
- 탐색기(Explorer) 창에서 두 개의 탭을 엽니다.
- 폴더 트리에서 비교할 폴더를 선택하거나, 경로 표시줄(Path Bar)을 사용하여 전체 경로를 직접 입력합니다.
- 상단의 **`홈(Home)`** 메뉴에서 **`Compare`** 버튼을 클릭하여 비교를 시작합니다.

<img src="/support/images/en/howto/rcloneview-basic/select-compare-folder.png" alt="select compare folder" class="img-medium img-center" />
비교가 완료되면 요약 팝업이 표시됩니다.
이후 이 메시지를 표시하지 않으려면 **"다시 표시하지 않음(Don't show this message again)"**을 체크하세요.
<img src="/support/images/en/howto/rcloneview-basic/folder-comparison-completed.png" alt="folder comparison completed" class="img-medium img-center" />
폴더 비교 화면의 구성과 각 아이콘의 의미에 대한 자세한 내용은 폴더 비교 가이드를 참고하세요.

## 비교 결과 및 파일 관리

폴더 비교를 통해 파일을 직접 비교하고 선택하여 관리할 수 있습니다.

하지만 대용량 폴더를 동기화하거나 여러 리모트 폴더를 효율적으로 관리해야 한다면, **`Sync`**를 사용하는 것이 더 편리한 방법입니다.

### 선택한 결과 유형별로 표시하기

비교 결과를 필터링하여 작업과 관련된 파일만 표시할 수 있습니다.  
이를 통해 복사하거나 검토해야 할 대상에만 집중할 수 있습니다.

예를 들어, 왼쪽 리모트의 폴더에서 오른쪽으로 파일을 복사하고 싶다면:

- **`Show left-only files`** 아이콘 <img src="/support/icons/show-left-only-files.png" alt="show left only files" class="inline-icon" />을 클릭하여 왼쪽 폴더에는 있지만 오른쪽에는 없는 파일만 표시합니다.
- **`Show different files`** 아이콘 <img src="/support/icons/show-different-files.png" alt="show different files" class="inline-icon" />을 클릭하여 양쪽 폴더에 모두 있지만 크기가 다른 파일을 표시합니다.
- 이렇게 하면 이미 동기화된 파일에 방해받지 않고, 오른쪽으로 복사해야 할 대상 파일에만 집중할 수 있습니다.

> ✅ 이를 통해 한 방향으로 필요한 파일만 훨씬 쉽게 선택하고 복사할 수 있습니다.
<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="compare display select" class="img-medium img-center" />



<details>
<summary>아이콘 상세 정보 더 보기</summary>

#### 비교 창의 아이콘 이해하기
<Tabs>
<TabItem value="Display Icons" label="표시 아이콘">
각 아이콘을 마우스로 클릭하면 다음과 같은 필터링 동작이 적용됩니다.  
다시 클릭하면 필터가 켜지거나 꺼집니다.

여러 아이콘을 선택하면 선택된 조건 중 **하나라도** 일치하는 파일이 표시됩니다(논리 **OR**).

<img src="/support/icons/show-left-only-files.png" alt="show left only files" class="inline-icon" /> : 왼쪽 폴더에는 있지만 오른쪽에는 없는 파일만 표시합니다.

<img src="/support/icons/show-left-only-files.png" alt="show left only files" class="inline-icon" /> : 오른쪽 폴더에는 있지만 왼쪽에는 없는 파일만 표시합니다.

<img src="/support/icons/same-file-icon.png" alt="same file icon" class="inline-icon" /> : 양쪽 폴더에 모두 있으며 동일한 파일만 표시합니다.

<img src="/support/icons/show-different-files.png" alt="show different files" class="inline-icon" />  : 양쪽 폴더에 모두 있지만 크기가 다른 파일을 표시합니다.

<img src="/support/icons/show-errored-files.png" alt="show errored files" class="inline-icon" /> : 오류나 충돌이 있는 항목을 표시합니다.

</TabItem>

<TabItem value="Navigate Icons" label="탐색 아이콘">
이 아이콘들은 **Compare** 화면에서 현재 플랫 폴더 목록 구조를 기준으로 폴더 계층을 위아래로 이동할 때 사용됩니다.

<img src="/support/icons/navigate-to-upper-folder.png" alt="navigate to upper folder" class="inline-icon" /> : 현재 목록에서 **상위 폴더**로 이동합니다.

<img src="/support/icons/navigate-to-lower-folder.png" alt="navigate to lower folder" class="inline-icon" /> : 현재 목록에서 **하위 폴더**로 이동합니다.

</TabItem>

<TabItem value="Operation Icons" label="작업 아이콘">
이 아이콘들은 파일 삭제, 왼쪽 또는 오른쪽으로 복사와 같은 폴더 내 파일 작업을 수행할 때 사용됩니다.

<img src="/support/icons/copy-file-to-right.png" alt="copy file to right" class="inline-icon" /> : 선택한 파일을 오른쪽 폴더로 복사합니다.

<img src="/support/icons/copy-files-to-left.png" alt="copy files to left" class="inline-icon" /> : 선택한 파일을 왼쪽 폴더로 복사합니다.

<img src="/support/icons/delete-files.png" alt="delete files" class="inline-icon" /> : 양쪽 중 선택한 파일을 삭제합니다.

</TabItem>

<TabItem value="Find Icons" label="찾기 아이콘">
**찾기(Find)** 아이콘은 **Compare 화면**에서 파일 수 또는 파일 크기 변화가 가장 큰 폴더를 찾을 때 사용됩니다.

<img src="/support/icons/find-folder-by-count.png" alt="find folder by count" class="inline-icon" /> : 비교 중 변경된 파일 수를 기준으로 폴더를 찾습니다.

<img src="/support/icons/find-folder-by-size.png" alt="find folder by size" class="inline-icon" /> : 비교 중 변경된 파일의 총 크기를 기준으로 폴더를 찾습니다.

<img src="/support/icons/find-folder-with-largest-change.png" alt="find folder with largest change" class="inline-icon" /> : 파일 수 또는 크기 변화가 가장 큰 폴더를 찾아 이동합니다.

<img src="/support/icons/find-folder-with-next-large-change.png" alt="find folder with next large change" class="inline-icon" /> : 파일 수 또는 크기 차이가 더 큰 다음 폴더로 이동합니다.

<img src="/support/icons/find-folder-with-smallest-change.png" alt="find folder with smallest change" class="inline-icon" /> : 변경 사항이 가장 적은 폴더를 찾아 이동합니다.

<img src="/support/icons/find-folder-with-next-smaller-change.png" alt="find folder with next smaller change" class="inline-icon" /> : 파일 수 또는 크기 차이가 더 작은 다음 폴더로 이동합니다.

</TabItem>

</Tabs>


</details>


### 리모트 폴더 간 파일 복사하기

#### 복사할 파일 선택하기

- `Ctrl + Click`을 사용하여 개별 파일을 선택합니다
- `Shift + Click`을 사용하여 범위를 선택합니다
- 또는 두 창 사이에서 드래그 앤 드롭을 사용할 수도 있습니다

#### 복사 작업 수행하기

파일을 선택한 후:
- **`Copy →`** 버튼을 클릭하여 선택한 파일을 왼쪽에서 오른쪽으로 복사합니다.
- **`← Copy`** 버튼을 클릭하여 오른쪽에서 왼쪽으로 복사합니다.

💡 복사는 다음과 같은 경우에만 수행됩니다:
- 대상 쪽에 해당 파일이 존재하지 않는 경우
- 파일이 양쪽에 모두 존재하지만 크기가 다른 경우

복사가 완료되면:
- 복사된 파일은 비교 화면에서 **`equal`** 아이콘 <img src="/support/icons/equal-icon.png" alt="equal icon" class="inline-icon" />으로 표시됩니다
- 하단 상태 표시줄에 완료 세부 정보가 업데이트됩니다
<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-basic/compare-copy-operation.png" alt="compare copy operation" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/compare-copy-operation-completed.png" alt="compare copy operation completed" class="img-medium img-center" />
</div>
:::important 체크섬 (출시 예정)
기본적으로 RcloneView는 이름과 크기를 기준으로 파일을 비교합니다.  
하지만 파일 이름과 크기가 동일한 경우, 이것만으로는 내용의 차이를 감지하기에 충분하지 않을 수 있습니다.
✅ 체크섬 비교를 사용하면 파일 내용을 바이트 단위로 검증할 수 있습니다.  
이 기능은 향후 업데이트에서 제공될 예정이며, 더욱 높은 동기화 정확도를 보장하는 데 도움이 될 것입니다.
:::
#### 파일 삭제하기

양쪽 폴더 중 선택한 파일을 삭제할 수도 있습니다:
- 왼쪽의 **`Delete`** 버튼을 클릭하여 왼쪽 폴더에서 파일을 제거합니다
- 오른쪽의 **`Delete`** 버튼을 클릭하여 오른쪽 폴더에서 파일을 제거합니다

⚠️ 삭제는 영구적입니다. 진행하기 전에 선택한 파일을 다시 한 번 확인하세요.
 
## 필터를 사용하여 비교 범위 좁히기

필터 기능을 사용하면 특정 파일이나 폴더를 결과에서 제외하여 폴더 비교를 더 효율적으로 수행할 수 있습니다.

 :::important Plus 라이선스 필요
필터링은 RcloneView의 **Plus** 라이선스 버전에서 사용할 수 있습니다.
:::

### 필터를 사용하는 이유

비교 작업과 관련 없는 특정 폴더나 파일 형식을 제외하고 싶을 수 있습니다.  
필터 도구를 사용하면 비교 중 무시해야 할 파일이나 폴더를 쉽게 지정할 수 있습니다.

### 특정 폴더를 제외하는 방법:

예를 들어, `folder2`라는 이름의 모든 폴더를 비교에서 제외하려면:
1. Compare 화면에서 **`Filter`** 아이콘 <img src="/support/icons/filter-run-icon.png" alt="filter run icon" class="inline-icon" />을 클릭합니다.
2. 필터 입력 필드에 `folder2/`를 입력하고 **`Add`**를 클릭합니다.
3. 해당 폴더가 **`Others`** 카테고리에 표시됩니다.
4. `folder2/` 옆의 체크박스를 선택하고 **`OK`**를 클릭하여 필터를 적용합니다.
5. 비교를 다시 실행합니다.

<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-basic/add-custom-filter-rule.png" alt="add custom filter rule" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/addjust-custom-filter-rule.png" alt="addjust custom filter rule" class="img-medium img-center" />
</div>

💡 필터링은 `cache`, `temp` 또는 개인 설정 디렉터리처럼 참고용으로만 존재하며 비교하거나 복사할 필요가 없는 폴더가 있을 때 특히 유용합니다.



<details>
<summary>자주 사용하는 필터 규칙</summary>

#### 일반적으로 사용하는 필터 예시

**`.iso`** : 모든 .iso 파일 제외

**`/.git/*`** : 하위 폴더는 제외하고 루트의 .git 폴더 안에 있는 파일만 제외

**`/.git/`** : 루트의 .git 폴더 전체와 그 안의 모든 항목을 제외

**`.git/`** : 위치에 상관없이 모든 .git 폴더와 그 안의 모든 항목을 제외

</details>



