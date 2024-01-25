// الگوریتم اتصال هر موش به نزدیک‌ترین سوراخ 
function connectMiceToHoles(mice, holes) {
    // مرتب سازی موقعیت‌های موش‌ها و سوراخ‌ها بر اساس موقعیت
    mice.sort((a, b) => a - b);
    holes.sort((a, b) => a - b);

    const connections = {}; // ارتباطات موش‌ها با سوراخ‌ها

    for (let i = 0; i < mice.length; i++) {
        connections[`Mouse ${i + 1}`] = `Hole ${i + 1}`;
    }

    return connections;
}

// مثالی از استفاده از این الگوریتم
const micePositions = [2, 5, 9, 13]; // موقعیت‌های موش‌ها در یک بعد
const holePositions = [3, 6, 10, 15]; // موقعیت‌های سوراخ‌ها در یک بعد

const mice = micePositions.map((position, index) => ({ id: `Mouse ${index + 1}`, position }));
const holes = holePositions.map((position, index) => `Hole ${index + 1}`);

const connections = connectMiceToHoles(mice, holes);
console.log(connections); // چاپ ارتباطات موش‌ها با سوراخ‌ها

// در این کد، ابتدا موقعیت‌های موش‌ها و سوراخ‌ها را در یک بعد مرتب می‌کنیم، 
// سپس هر موش را به سوراخ متناظر با فاصله کمینه متصل می‌کنیم.
//  در این مثال، موقعیت‌های موش‌ها و سوراخ‌ها به صورت
//  آرایه‌های اعداد تعیین شده و پس از اجرای الگوریتم،
//  ارتباطات موش‌ها با سوراخ‌ها در کنسول چاپ می‌شود.
