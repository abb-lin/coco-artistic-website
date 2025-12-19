// 自然摄影数据（高质量自然风光照片）
const naturePhotos = [
    {
        url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        title: '雪山晨曦',
        source: 'Unsplash'
    },
    {
        url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        title: '森林迷雾',
        source: 'Unsplash'
    },
    {
        url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        title: '秋日森林',
        source: 'Unsplash'
    },
    {
        url: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        title: '山间瀑布',
        source: 'Unsplash'
    },
    {
        url: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        title: '金色日落',
        source: 'Unsplash'
    },
    {
        url: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        title: '湖光山色',
        source: 'Unsplash'
    },
    {
        url: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        title: '云海日出',
        source: 'Unsplash'
    },
    {
        url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        title: '雪山倒影',
        source: 'Unsplash'
    }
];

// 名人名言数据（经典智慧语录）
const motivationalQuotes = [
    {
        text: "生活的意义在于奉献，而不是索取。",
        author: "列夫·托尔斯泰"
    },
    {
        text: "人生最大的幸福是坚信有人爱我们。",
        author: "维克多·雨果"
    },
    {
        text: "成功的秘诀在于对目标的执着追求。",
        author: "本杰明·迪斯雷利"
    },
    {
        text: "生命不止，奋斗不息。",
        author: "托马斯·卡莱尔"
    },
    {
        text: "真正的智慧在于知道自己无知。",
        author: "苏格拉底"
    },
    {
        text: "希望是美好的，也许是人间至善。",
        author: "斯蒂芬·金"
    },
    {
        text: "人生没有彩排，每一天都是现场直播。",
        author: "佚名"
    },
    {
        text: "你的时间有限，不要为别人而活。",
        author: "史蒂夫·乔布斯"
    },
    {
        text: "生活中最重要的事情不是胜利，而是奋斗。",
        author: "皮埃尔·德·顾拜旦"
    },
    {
        text: "世界上最宽阔的是海洋，比海洋更宽阔的是天空，比天空更宽阔的是人的胸怀。",
        author: "雨果"
    }
];

// 山水背景图片库
const landscapeBackgrounds = [
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80',
    'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80',
    'https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&auto=format&fit=crop&w=2073&q=80',
    'https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
];

// 股票数据（模拟数据）
const stockData = [
    {
        symbol: 'AAPL',
        name: '苹果公司',
        price: 185.72,
        change: 2.34,
        high: 186.45,
        low: 183.21,
        icon: 'fa-apple-alt'
    },
    {
        symbol: 'MSFT',
        name: '微软',
        price: 415.86,
        change: 1.87,
        high: 417.23,
        low: 412.45,
        icon: 'fa-window-restore'
    },
    {
        symbol: 'TSLA',
        name: '特斯拉',
        price: 248.42,
        change: -0.56,
        high: 251.78,
        low: 245.63,
        icon: 'fa-car'
    },
    {
        symbol: 'GOOGL',
        name: '谷歌',
        price: 172.34,
        change: 0.89,
        high: 173.12,
        low: 170.45,
        icon: 'fa-search'
    },
    {
        symbol: 'AMZN',
        name: '亚马逊',
        price: 178.56,
        change: 1.23,
        high: 179.89,
        low: 176.34,
        icon: 'fa-shopping-cart'
    },
    {
        symbol: 'NFLX',
        name: 'Netflix',
        price: 645.32,
        change: -1.12,
        high: 652.78,
        low: 642.15,
        icon: 'fa-play-circle'
    }
];

// 全局变量
let currentPhotoIndex = 0;
let currentQuoteIndex = 0;
let quoteHistory = [];
let photoUpdateTimer = null;
let quoteUpdateTimer = null;
let stocksUpdateTimer = null;

// DOM加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// 初始化应用
function initializeApp() {
    setBackgroundImage();
    loadPhotos();
    loadQuote();
    loadStocks();
    setupEventListeners();
    startUpdateTimers();
    updateFooterStats();
    
    // 添加淡入动画
    setTimeout(() => {
        document.querySelector('.hero-content').classList.add('fade-in-up');
        document.querySelector('.intro-section').classList.add('fade-in-up');
        document.querySelector('.content-grid').classList.add('fade-in-up');
        document.querySelector('.stocks-section').classList.add('fade-in-up');
    }, 300);
}

// 设置山水背景图片
function setBackgroundImage() {
    const heroBackground = document.querySelector('.hero-background');
    const today = new Date().getDate();
    const backgroundIndex = today % landscapeBackgrounds.length;
    const backgroundUrl = landscapeBackgrounds[backgroundIndex];
    
    // 预加载图片
    const img = new Image();
    img.onload = function() {
        heroBackground.style.backgroundImage = `url('${backgroundUrl}')`;
        heroBackground.style.opacity = '1';
    };
    img.src = backgroundUrl;
}

// 加载自然摄影照片
function loadPhotos() {
    const photoContainer = document.getElementById('photo-container');
    photoContainer.innerHTML = '';
    
    // 随机选择6张照片显示
    const shuffledPhotos = [...naturePhotos].sort(() => 0.5 - Math.random());
    const selectedPhotos = shuffledPhotos.slice(0, 6);
    
    selectedPhotos.forEach((photo, index) => {
        const photoItem = document.createElement('div');
        photoItem.className = 'photo-item';
        photoItem.innerHTML = `
            <img src="${photo.url}" alt="${photo.title}" loading="lazy">
            <div class="photo-overlay">
                <div class="photo-title">${photo.title}</div>
                <div class="photo-source">${photo.source}</div>
            </div>
        `;
        
        // 添加点击事件查看大图
        photoItem.addEventListener('click', () => {
            showPhotoModal(photo);
        });
        
        photoContainer.appendChild(photoItem);
    });
    
    // 更新照片计数
    updatePhotoCount();
}

// 显示照片模态框
function showPhotoModal(photo) {
    // 创建模态框
    const modal = document.createElement('div');
    modal.className = 'photo-modal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2000;
        cursor: pointer;
    `;
    
    modal.innerHTML = `
        <div style="max-width: 90%; max-height: 90%; position: relative;">
            <img src="${photo.url}" alt="${photo.title}" style="max-width: 100%; max-height: 100%; border-radius: 8px;">
            <div style="position: absolute; bottom: 0; left: 0; right: 0; background: rgba(0,0,0,0.7); color: white; padding: 1rem; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px;">
                <h3 style="margin: 0 0 0.5rem 0;">${photo.title}</h3>
                <p style="margin: 0; opacity: 0.8;">来源：${photo.source}</p>
            </div>
            <button style="position: absolute; top: 10px; right: 10px; background: rgba(0,0,0,0.5); color: white; border: none; border-radius: 50%; width: 40px; height: 40px; cursor: pointer; font-size: 1.2rem;">×</button>
        </div>
    `;
    
    // 点击关闭
    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.textContent === '×') {
            document.body.removeChild(modal);
        }
    });
    
    // 键盘关闭
    const closeModal = (e) => {
        if (e.key === 'Escape') {
            document.body.removeChild(modal);
            document.removeEventListener('keydown', closeModal);
        }
    };
    
    document.addEventListener('keydown', closeModal);
    document.body.appendChild(modal);
}

// 加载名人名言
function loadQuote() {
    // 随机选择一条名言
    const randomIndex = Math.floor(Math.random() * motivationalQuotes.length);
    currentQuoteIndex = randomIndex;
    const quote = motivationalQuotes[randomIndex];
    
    // 更新DOM
    document.getElementById('quote-text').textContent = quote.text;
    document.getElementById('quote-author').textContent = `- ${quote.author}`;
    
    // 添加到历史记录
    addToQuoteHistory(quote);
    
    // 更新名言计数
    updateQuoteCount();
}

// 添加到名言历史记录
function addToQuoteHistory(quote) {
    const historyItem = {
        text: quote.text,
        author: quote.author,
        timestamp: new Date().toLocaleTimeString('zh-CN', { 
            hour: '2-digit', 
            minute: '2-digit' 
        })
    };
    
    quoteHistory.unshift(historyItem);
    
    // 只保留最近5条记录
    if (quoteHistory.length > 5) {
        quoteHistory = quoteHistory.slice(0, 5);
    }
    
    updateQuoteHistory();
}

// 更新名言历史记录显示
function updateQuoteHistory() {
    const historyContainer = document.getElementById('quote-history');
    historyContainer.innerHTML = '';
    
    quoteHistory.forEach((item, index) => {
        const historyItem = document.createElement('div');
        historyItem.className = 'history-item';
        historyItem.innerHTML = `
            <div style="font-style: italic; margin-bottom: 0.25rem;">"${item.text}"</div>
            <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.8rem; color: #666;">
                <span>${item.author}</span>
                <span>${item.timestamp}</span>
            </div>
        `;
        historyContainer.appendChild(historyItem);
    });
}

// 设置事件监听器
function setupEventListeners() {
    // 导航链接点击事件
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            scrollToSection(targetId);
            
            // 更新活动状态
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });
    
    // 滚动时更新导航状态
    window.addEventListener('scroll', updateNavActiveState);
}

// 滚动到指定区域
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const offsetTop = section.offsetTop - 80; // 考虑导航栏高度
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// 更新导航活动状态
function updateNavActiveState() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// 启动更新计时器
function startUpdateTimers() {
    // 照片每日更新（24小时）
    startPhotoCountdown();
    
    // 名言每10分钟更新
    startQuoteCountdown();
    
    // 股票数据每5分钟更新
    startStocksCountdown();
}

// 照片倒计时
function startPhotoCountdown() {
    const countdownElement = document.getElementById('photo-countdown');
    
    // 计算到明天凌晨的时间
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    
    const updateCountdown = () => {
        const now = new Date();
        const diff = tomorrow - now;
        
        if (diff <= 0) {
            // 新的一天，重置照片
            tomorrow.setDate(tomorrow.getDate() + 1);
            refreshPhotos();
            return;
        }
        
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        countdownElement.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };
    
    updateCountdown();
    photoUpdateTimer = setInterval(updateCountdown, 1000);
}

// 名言倒计时
function startQuoteCountdown() {
    const countdownElement = document.getElementById('quote-countdown');
    let countdown = 10 * 60; // 10分钟
    
    const updateCountdown = () => {
        const minutes = Math.floor(countdown / 60);
        const seconds = countdown % 60;
        
        countdownElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        
        if (countdown <= 0) {
            refreshQuote();
            countdown = 10 * 60; // 重置为10分钟
        } else {
            countdown--;
        }
    };
    
    updateCountdown();
    quoteUpdateTimer = setInterval(updateCountdown, 1000);
}

// 刷新照片
function refreshPhotos() {
    // 显示加载动画
    const photoContainer = document.getElementById('photo-container');
    photoContainer.style.opacity = '0.5';
    
    setTimeout(() => {
        loadPhotos();
        photoContainer.style.opacity = '1';
        showNotification('自然摄影已更新', 'success');
    }, 500);
}

// 刷新名言
function refreshQuote() {
    // 显示加载动画
    const quoteCard = document.getElementById('current-quote');
    quoteCard.style.opacity = '0.5';
    
    setTimeout(() => {
        loadQuote();
        quoteCard.style.opacity = '1';
        showNotification('名人名言已更新', 'success');
    }, 300);
}

// 更新页脚统计
function updateFooterStats() {
    document.getElementById('photo-count').textContent = naturePhotos.length;
    document.getElementById('quote-count').textContent = motivationalQuotes.length;
}

// 更新照片计数
function updatePhotoCount() {
    // 可以添加照片浏览统计功能
    console.log('照片已加载');
}

// 更新名言计数
function updateQuoteCount() {
    // 可以添加名言阅读统计功能
    console.log('名言已加载');
}

// 加载股票数据
function loadStocks() {
    // 随机选择3只股票显示
    const shuffledStocks = [...stockData].sort(() => 0.5 - Math.random());
    const selectedStocks = shuffledStocks.slice(0, 3);
    
    const stocksGrid = document.querySelector('.stocks-grid');
    stocksGrid.innerHTML = '';
    
    selectedStocks.forEach((stock, index) => {
        const stockCard = document.createElement('div');
        stockCard.className = 'stock-card';
        
        // 根据涨跌设置颜色
        const changeClass = stock.change >= 0 ? 'positive' : 'negative';
        const changeSymbol = stock.change >= 0 ? '+' : '';
        
        stockCard.innerHTML = `
            <div class="stock-header">
                <div class="stock-info">
                    <span class="stock-symbol">${stock.symbol}</span>
                    <span class="stock-name">${stock.name}</span>
                </div>
                <i class="fas ${stock.icon}"></i>
            </div>
            <div class="stock-price">
                <span class="current-price">$${stock.price.toFixed(2)}</span>
                <span class="price-change ${changeClass}">${changeSymbol}${stock.change.toFixed(2)}%</span>
            </div>
            <div class="stock-chart">
                <div class="chart-line" style="background: ${stock.change >= 0 ? '#4CAF50' : '#F44336'}"></div>
            </div>
            <div class="stock-details">
                <div class="detail-item">
                    <span>今日高</span>
                    <span>$${stock.high.toFixed(2)}</span>
                </div>
                <div class="detail-item">
                    <span>今日低</span>
                    <span>$${stock.low.toFixed(2)}</span>
                </div>
            </div>
        `;
        
        stocksGrid.appendChild(stockCard);
    });
    
    // 更新时间显示
    updateStocksTime();
}

// 股票倒计时
function startStocksCountdown() {
    let countdown = 5 * 60; // 5分钟
    
    const updateCountdown = () => {
        const minutes = Math.floor(countdown / 60);
        const seconds = countdown % 60;
        
        if (countdown <= 0) {
            refreshStocks();
            countdown = 5 * 60; // 重置为5分钟
        } else {
            countdown--;
        }
    };
    
    updateCountdown();
    stocksUpdateTimer = setInterval(updateCountdown, 1000);
}

// 刷新股票数据
function refreshStocks() {
    // 显示加载动画
    const stocksGrid = document.querySelector('.stocks-grid');
    stocksGrid.style.opacity = '0.5';
    
    // 模拟数据更新（在实际应用中，这里应该调用API）
    setTimeout(() => {
        // 随机更新股票价格
        stockData.forEach(stock => {
            const randomChange = (Math.random() - 0.5) * 4; // -2% 到 +2%
            stock.change = randomChange;
            stock.price = Math.max(1, stock.price * (1 + randomChange / 100));
            stock.high = Math.max(stock.price, stock.high * (1 + Math.random() * 0.01));
            stock.low = Math.min(stock.price, stock.low * (1 - Math.random() * 0.01));
        });
        
        loadStocks();
        stocksGrid.style.opacity = '1';
        showNotification('股票数据已更新', 'success');
    }, 800);
}

// 更新股票数据时间
function updateStocksTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('zh-CN', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    
    const updateTimeElement = document.getElementById('stocks-update-time');
    if (updateTimeElement) {
        updateTimeElement.textContent = timeString;
    }
}

// 显示通知
function showNotification(message, type = 'info') {
    // 创建通知元素
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : '#2196F3'};
        color: white;
        padding: 12px 20px;
        border-radius: 4px;
        z-index: 1001;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    `;
    
    document.body.appendChild(notification);
    
    // 显示动画
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // 自动隐藏
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// 导出函数供HTML调用
window.refreshPhotos = refreshPhotos;
window.refreshQuote = refreshQuote;
window.refreshStocks = refreshStocks;

// 页面卸载时清理计时器
window.addEventListener('beforeunload', () => {
    if (photoUpdateTimer) clearInterval(photoUpdateTimer);
    if (quoteUpdateTimer) clearInterval(quoteUpdateTimer);
    if (stocksUpdateTimer) clearInterval(stocksUpdateTimer);
});