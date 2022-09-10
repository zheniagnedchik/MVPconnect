import FormCss from './Form.module.css';

const PracticeForm = () => {
    return (
        <div className={FormCss.PracticeForm}>
            <div className={FormCss.formWrapper}></div>
            <div className={FormCss.formItem}>
                <div className={FormCss.overhead}>Форма записи на</div>
                <div className={FormCss.title}>
                    Практический курс “Работа по стандартам IT-компаний”
                </div>

                <form className={FormCss.form} action="">
                    <label htmlFor="name">Ваше имя*</label>{' '}
                    <input name="name" type="text" />
                    <label htmlFor="tel">Телефон для связи</label>{' '}
                    <input name="tel" type="tel" />
                    <label htmlFor="nick">
                        Ваш никнейм в выбранном мессенджере, для возможности
                        связи, с учетом приватности*
                    </label>{' '}
                    <input name="nick" type="text" />
                </form>

                <div className={FormCss.footer}>
                    <div className={FormCss.footerInfo}>
                        Отправляя заявку, вы принимаете условия публичного
                        договора и даете согласие на обработку своих
                        персональных данных. С договором можно ознакомиться по{' '}
                        <a href="https://drive.google.com/file/d/1Epnq1yeZ_ePRwbIPsAwxi1kFXwOZFxoo/view?usp=sharing">
                            {' '}
                            ссылке
                        </a>
                    </div>
                    <a href="/">
                        {' '}
                        <div className={FormCss.footerBtn}>
                            {' '}
                            <p>Записаться</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default PracticeForm;
