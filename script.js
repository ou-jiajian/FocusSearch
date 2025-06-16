document.addEventListener('DOMContentLoaded', () => {
    const platformSelector = document.getElementById('platform-selector');
    const searchQueryInput = document.getElementById('search-query');
    const searchButton = document.getElementById('search-button');

    const searchPlatforms = {
        weibo: 'https://s.weibo.com/weibo?q=',
        xiaohongshu: 'https://www.xiaohongshu.com/search_result/?keyword=',
        zhihu: 'https://www.zhihu.com/search?type=content&q=',
        bilibili: 'https://search.bilibili.com/all?keyword=',
        douyin: 'https://www.douyin.com/search/',
        google: 'https://www.google.com/search?q=',
        baidu: 'https://www.baidu.com/s?wd=',
        taobao: 'https://s.taobao.com/search?q=',
        jd: 'https://search.jd.com/Search?keyword=',
        toutiao: 'https://www.toutiao.com/search/?keyword=',
    };

    function performSearch() {
        const platform = platformSelector.value;
        const query = searchQueryInput.value.trim();

        if (!query) {
            alert('请输入搜索内容！');
            searchQueryInput.focus();
            return;
        }

        let searchUrl = searchPlatforms[platform];

        if (searchUrl) {
            // For Douyin, the query is part of the path, not a query parameter
            if (platform === 'douyin') {
                searchUrl = `${searchUrl}${encodeURIComponent(query)}`;
            } else {
                searchUrl = `${searchUrl}${encodeURIComponent(query)}`;
            }
            window.open(searchUrl, '_blank');
        } else {
            alert('选择了无效的平台！');
        }
    }

    searchButton.addEventListener('click', performSearch);

    searchQueryInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            performSearch();
        }
    });
});