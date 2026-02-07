const layoutHeader = `
<style>
    .left-sidebar { text-align: right; }
    .right-sidebar { text-align: left; }
</style>

<!-- Wing Ads (Injected by layout.js) -->
<div class="fixed top-24 left-1/2 transform -translate-x-[480px] xl:-translate-x-[680px] min-[1920px]:-translate-x-[820px] z-50 hidden lg:block left-sidebar">
    <div class="kakao-ad-wing" data-unit="DAN-SZ003ddf6UI1fEeY" data-width="160" data-height="600"></div>
</div>
<div class="fixed top-24 right-1/2 transform translate-x-[480px] xl:translate-x-[680px] min-[1920px]:translate-x-[820px] z-50 hidden lg:block right-sidebar">
    <div class="kakao-ad-wing" data-unit="DAN-8xPelGgdrErfct1z" data-width="160" data-height="600"></div>
</div>

<header class="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-200">
    <div class="ad-optimized-container h-14 flex items-center justify-between">
        <a href="index.html" class="flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer">
            <div class="bg-slate-900 text-white p-1 rounded-lg"><i data-lucide="brain-circuit" width="18" height="18"></i></div>
            <span class="font-black text-base tracking-tight text-slate-900">자산 관리 및 은퇴 계산기</span>
        </a>
        <div class="flex items-center gap-3">
            <nav class="hidden md:flex items-center gap-3 text-xs font-bold">
                <a href="retirement_simulator.html" class="nav-link text-slate-400 hover:text-blue-600" data-page="retirement">은퇴 계산기</a>
                <span class="text-slate-200 select-none">|</span>
                <a href="compound_calculator.html" class="nav-link text-slate-400 hover:text-emerald-600" data-page="compound">복리 계산기</a>
                <span class="text-slate-200 select-none">|</span>
                <a href="tax_calculator.html" class="nav-link text-slate-400 hover:text-indigo-600" data-page="tax">절세 계산기</a>
                <span class="text-slate-200 select-none">|</span>
                <a href="lotto_simulator.html" class="nav-link text-slate-400 hover:text-purple-600" data-page="lotto">로또 계산기</a>
            </nav>
            <button onclick="copyUrl()" class="p-1.5 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-all"><i data-lucide="share-2" width="16" height="16"></i></button>
        </div>
    </div>
    <div class="md:hidden flex border-t border-slate-100">
        <a href="retirement_simulator.html" class="flex-1 py-2.5 text-xs font-bold flex items-center justify-center gap-2 text-slate-400" data-page="retirement-m"><i data-lucide="clock" width="14" height="14"></i> 은퇴</a>
        <a href="compound_calculator.html" class="flex-1 py-2.5 text-xs font-bold flex items-center justify-center gap-2 text-slate-400" data-page="compound-m"><i data-lucide="calculator" width="14" height="14"></i> 복리</a>
        <a href="tax_calculator.html" class="flex-1 py-2.5 text-xs font-bold flex items-center justify-center gap-2 text-slate-400" data-page="tax-m"><i data-lucide="piggy-bank" width="14" height="14"></i> 절세</a>
        <a href="lotto_simulator.html" class="flex-1 py-2.5 text-xs font-bold flex items-center justify-center gap-2 text-slate-400" data-page="lotto-m"><i data-lucide="clover" width="14" height="14"></i> 로또</a>
    </div>
</header>
`;

const layoutFooter = `
<footer class="w-full bg-slate-900 text-slate-300 border-t border-slate-800 mt-auto">
    <div class="ad-optimized-container py-8">
        <div class="flex flex-col items-center text-center space-y-4">
            <!-- Service Name -->
            <div class="text-lg font-black text-white">
                은퇴계산기 - 뼈때리는 은퇴 및 자산 관리 계산기
            </div>
            
            <!-- Disclaimer -->
            <div class="max-w-2xl text-xs text-slate-400 leading-relaxed">
                본 서비스의 계산 결과는 시뮬레이션 수치이며, 실제 결과나 법적 효력을 보장하지 않습니다. 과도한 몰입은 정신 건강에 해로울 수 있습니다.
            </div>
            
            <!-- Legal Links -->
            <div class="flex items-center gap-4 text-xs">
                <a href="terms.html" class="text-slate-400 hover:text-white transition-colors">이용약관</a>
                <span class="text-slate-600">|</span>
                <a href="privacy.html" class="text-slate-400 hover:text-white transition-colors">개인정보 처리방침</a>
            </div>
            
            <!-- Creator & Copyright -->
            <div class="flex flex-col items-center gap-1 text-xs text-slate-500">
                <div>Made by <span class="font-semibold text-slate-400">gigi</span></div>
                <div>ⓒ 2026 gigi. All rights reserved.</div>
            </div>
        </div>
    </div>
</footer>
`;

// Insert Layout
document.body.insertAdjacentHTML('afterbegin', layoutHeader);
document.body.insertAdjacentHTML('beforeend', layoutFooter);

// Immediate Icon Render for Logo
if (window.lucide) window.lucide.createIcons();

// Helpers
window.copyUrl = function () {
    const url = window.location.href;
    const textArea = document.createElement("textarea");
    textArea.value = url;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    alert('URL이 복사되었습니다!');
};

// Highlight Active Link
document.addEventListener('DOMContentLoaded', () => {
    const page = path.includes('compound') ? 'compound' :
        path.includes('tax') ? 'tax' :
            path.includes('kids') ? 'kids' :
                path.includes('lotto') ? 'lotto' : 'retirement'; // Default to retirement

    // Desktop Nav
    const target = document.querySelector(`a[data-page="${page}"]`);
    if (target) {
        target.classList.remove('text-slate-400');
        if (page === 'compound') target.classList.add('text-emerald-600');
        else if (page === 'tax') target.classList.add('text-indigo-600');
        else if (page === 'kids') target.classList.add('text-pink-600');
        else if (page === 'lotto') target.classList.add('text-purple-600');
        else target.classList.add('text-blue-600');
    }

    // Mobile Nav
    const targetM = document.querySelector(`a[data-page="${page}-m"]`);
    if (targetM) {
        targetM.classList.remove('text-slate-400');
        if (page === 'compound') {
            targetM.classList.add('text-emerald-600', 'bg-emerald-50/50');
        } else if (page === 'tax') {
            targetM.classList.add('text-indigo-600', 'bg-indigo-50/50');
        } else if (page === 'kids') {
            targetM.classList.add('text-pink-600', 'bg-pink-50/50');
        } else if (page === 'lotto') {
            targetM.classList.add('text-purple-600', 'bg-purple-50/50');
        } else {
            targetM.classList.add('text-blue-600', 'bg-blue-50/50');
        }
    }

    // Init Lucide Icons if available
    if (window.lucide) {
        window.lucide.createIcons();
    }

    // Init Wing Ads (Centralized)
    const adWings = document.querySelectorAll('.kakao-ad-wing');
    if (adWings.length > 0) {
        adWings.forEach(el => {
            // Check if already initialized to avoid duplication
            if (el.querySelector('iframe') || el.querySelector('ins')) return;

            const unit = el.dataset.unit;
            const width = el.dataset.width;
            const height = el.dataset.height;

            const ins = document.createElement('ins');
            ins.className = 'kakao_ad_area';
            ins.style.display = 'none';
            ins.setAttribute('data-ad-unit', unit);
            ins.setAttribute('data-ad-width', width);
            ins.setAttribute('data-ad-height', height);

            const script = document.createElement('script');
            script.async = true;
            script.type = 'text/javascript';
            script.src = '//t1.daumcdn.net/kas/static/ba.min.js';

            el.appendChild(ins);
            el.appendChild(script);
        });
    }
});
