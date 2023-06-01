info();

function info () {
    const age = prompt('Введіть ваш рік народження:');
    if (age===null) {
        return alert('Шкода, що Ви не захотіли ввести свій рік народження.');
    }
    const city = prompt('Введіть ваше місце народження:');
    if (city===null) {
        return alert('Шкода, що Ви не захотіли ввести своє місце народження.');   
    }
    const sport = prompt('Введіть ваш улюблений спорт:');
        if (sport===null) {
            return alert('Шкода, що Ви не захотіли ввести свій улюблений спорт.')
        }

        switch (city) {
            case 'Київ':
                var text_city = 'Ти живеш у столиці України!';
                break;
            case 'Вашингтон':
                var text_city = 'Ти живеш у столиці США!';
                break;
            case 'Лондон':
                var text_city = 'Ти живеш у столиці Великої Британії!';
                break;
            default:
                var text_city = `Ти живеш у місті ${city}!`;
        }

        switch(sport) {
            case 'Крикет':
                var text_sport = 'Круто! Хочеш стати Вільямом Ґрейсом?';
                break;
            case 'Теніс':
                var text_sport = 'Круто! Хочеш стати Джиммі Коннорсом?';
                break;
            case 'Волейбол':
                var text_sport = 'Круто! Хочеш стати Антуан Брізаром?';
                break;
            default:
                var text_sport = 'Вдачі тобі в починаннях!'
        }
    
        alert(`Тобі ${2023-age} років. ${text_city} ${text_sport}`);
    }