import React from 'react';

interface GroupSidebarProps {
    currentTab: 'public' | 'my';
    onTabChange: (tab: 'public' | 'my') => void;
    onOpenCreateModal: () => void;
    searchType: 'name' | 'tag';
    onSearchTypeChange: (type: 'name' | 'tag') => void;
    searchTerm: string;
    onSearchChange: (value: string) => void;
}

export const Group_Sidebar: React.FC<GroupSidebarProps> = ({
    currentTab,
    onTabChange,
    onOpenCreateModal,
    searchType,
    onSearchTypeChange,
    searchTerm,
    onSearchChange,
}) => {
    return (
        <aside className="study-sidebar-container">
            {/* 1. 메뉴 둥근 사각형 박스 (3가지 메뉴만 포함) */}
            <nav className="study-menu-box">
                <button
                    className={`study-menu-button ${currentTab === 'my' ? 'active' : ''}`}
                    onClick={() => onTabChange('my')}
                >
                    내 스터디룸
                </button>

                <div className="study-menu-divider" />

                <button
                    className={`study-menu-button ${currentTab === 'public' ? 'active' : ''}`}
                    onClick={() => onTabChange('public')}
                >
                    공개된 스터디룸
                </button>

                <div className="study-menu-divider" />

                <button
                    className="study-menu-button"
                    onClick={onOpenCreateModal}
                >
                    스터디룸 생성
                </button>
            </nav>

            {/* 2. 메뉴 박스 '밖 아래'에 배치된 드롭다운 통합 검색 박스 */}
            <div className="sidebar-search-box">
                <select
                    className="sidebar-search-select"
                    value={searchType}
                    onChange={(e) => onSearchTypeChange(e.target.value as 'name' | 'tag')}
                >
                    <option value="name">이름으로 검색</option>
                    <option value="tag">태그로 검색</option>
                </select>
                
                <input
                    type="text"
                    placeholder="검색어 입력"
                    className="sidebar-search-input"
                    value={searchTerm}
                    onChange={(e) => onSearchChange(e.target.value)}
                />
            </div>
        </aside>
    );
};