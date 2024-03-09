import Head from 'next/head';
import React from 'react';

import Breadcrumbs from '@/features/Breadcrumbs';
import Layout from '@/shared/ui/Layout';
import Section from '@/shared/ui/Section';
import Title from '@/shared/ui/Title';
import Subscribe from '@/widgets/Subscribe';

import styles from './styles.module.scss';

const Agreement = () => {
  const paths = [
    { name: 'Главная', url: '/' },
    { name: 'Условия', url: '/agreement' },
  ];

  return (
    <>
      <Head>
        <Title className={styles.termsTitle} type={'small'}>
          Условия использования
        </Title>
      </Head>
      <Layout>
        <Breadcrumbs paths={paths}></Breadcrumbs>
        <Section noTopPadding={true}>
          <Title color={'purple'}>
            Условия использования
          </Title>

          <div className={styles.terms}>
            <Title className={styles.termsTitle} type={'small'}>
              Привет!
            </Title>
            <p>Мы терпеть не можем сложные юридические конструкции, так что попытаемся говорить нормальным языком.</p>
            <p>Под «мы» или «сайтом» понимается сайт crypto-host.net, онлайн-журнал о криптовалютах и блокчейн.</p>
            <p>
              «Пользователь» или «вы» — это любой человек, который пользуется сайтом. «Политика приватности» или
              «Политика» — это политика приватности сайта.
            </p>
            <p>
              Эти Условия использования и Политика приватности вместе представляют собой юридически обязывающее
              соглашение. Заходя на сайт или используя его, вы соглашаетесь с ними. Если вы не согласны с Политикой
              приватности или Условиями использования, пожалуйста, не заходите на сайт.
            </p>
            <Title className={styles.termsTitle} type={'small'}>
              Изменение условий
            </Title>
            <p>
              Мы можем изменять, дополнять и иным образом менять эти Условия без предварительного уведомления. Изменения
              вступают в силу с момента размещения новой версии Условий на сайте. Посещая сайт после внесения изменений
              в Условия, вы соглашаетесь с изменениями.
            </p>
            <Title className={styles.termsTitle} type={'small'}>
              Пользовательский контент
            </Title>
            <p>
              Мы стремимся к тому, чтобы наш сайт был справедливым к участникам. Понимая, что иногда вас может потянуть
              выругаться матом или оскорбить кого-то, мы все же просим этого не делать у нас на сайте. А еще не
              заниматься на нем незаконной деятельностью, в том числе такой, какая может нарушить нормальную работу
              нашего сайта или права других пользователей. Мы оставляем за собой право мониторить, модерировать и
              удалять ваш контент, а также запрещать вам доступ к сайту, если вы не будете соблюдать указанные правила.
            </p>
            <Title className={styles.termsTitle} type={'small'}>
              Наш контент
            </Title>
            <p>
              Как бы мы ни хотели вам помочь, весь наш контент не является консультацией на медицинские, финансовые,
              юридические, диетологические, инвестиционные или любые другие темы. Вы сами несете ответственность за свои
              действия или бездействие на основании информации с сайта. Мы предоставляем информацию только в общих
              информационных целях.
            </p>
            <p>
              Статьи на сайте выражают мнения своих авторов. Хотя мы стремимся к объективности, статьи не претендуют на
              изложение единой объективной истины. Если вы не согласны со статьей или из-за нее возникает любое
              противоречие, свяжитесь с нами по адресу info@crypto-host.net, и мы решим проблему.
            </p>
            <p>
              Если вы хотите использовать любой материал с сайта для публикации в любой форме, включая рерайт,
              необходимо предварительное согласование редакции. Напишите нам на newsroom@crypto-host.net, укажите в теме
              письма “Запрос на перепечатку”. В согласованных материалах обязательно указывать онлайн-журнал ForkLog как
              оригинальный источник и давать гиперссылку на https://crypto-host.net/. В остальном вы сами несете
              ответственность за проверку достоверности фактов, которые намерены обнародовать. В случае проблем
              онлайн-журнал ForkLog не несет ответственности за ваши публикации вне зависимости от того, использовали ли
              вы наши материалы в любом виде.
            </p>
            <Title className={styles.termsTitle} type={'small'}>
              Контент третьих сторон
            </Title>
            <p>
              Иногда мы можем давать ссылку на другие сайты, у которых, скорее всего, есть свои условия использования.
              Мы рекомендуем вам ознакомиться с ними, ответственность за это несете только вы.
            </p>
            <Title className={styles.termsTitle} type={'small'}>
              Изображения
            </Title>
            <p>
              Некоторые изображения на сайте взяты из интернета. Хотя мы используем только те изображения, которые
              полагаем общественным достоянием, никто не застрахован от ошибки. Если у вас есть основания считать, что
              мы использовали изображение, защищенное авторским правом или использованное без разрешения, просим вас
              сообщить об этом на адрес info@crypto-host.net, и мы удалим его.
            </p>
            <Title className={styles.termsTitle} type={'small'}>
              Права на интеллектуальную собственность
            </Title>
            <p>Мы уважаем права на интеллектуальную собственность и ожидаем от вас того же.</p>
            <p>
              На сайте есть много материалов, защищенных авторским правом, торговых марок и другой подобной информации.
              Мы владеем исключительными правами, интересом и правом собственности на нее. Копирование и/или
              использование их третьими лицами полностью либо частично без предварительного письменного согласия
              info@crypto-host.net строго запрещено.
            </p>
            <p>
              Если вы предоставите нам любой контент, он будет считаться неконфиденциальным. Мы не обязаны приписывать
              вам его авторство или приписывать любую форму авторства третьим лицам.
            </p>
            <Title className={styles.termsTitle} type={'small'}>
              Снятие, ограничение и защита от ответственности
            </Title>
            <p>
              Вы используете услуги нашего сайта на свой страх и риск. Услуги предоставляются как есть и по готовности.
              Мы не несем ответственности за доступ к сайту вовремя и без перебоев. Вы используете любые материалы на
              сайте на собственное усмотрение, риск и под свою ответственность.
            </p>
            <p>
              Ни в коем случае в рамках применимого законодательства мы не несем ответственности перед вами за любые
              травмы, утраты, ущерб или любые потери, возникшие из любых действий, связанных с использованием сайта.
            </p>
            <p>
              Вы соглашаетесь защищать нас и всех наших коллег от любого ущерба, утрат, штрафов и расходов, возникающих
              на основании или в связи с любыми утверждениями о том, что вы использовали сайт с нарушением прав третьей
              стороны, в нарушение применимого законодательства, в нарушение любого пункта этих Условий, либо в связи с
              любым другим требованием, возникающим из вашего пользования сайтом, если мы не дали разрешения на
              обратное.
            </p>
            <Title className={styles.termsTitle} type={'small'}>
              Применимое законодательство и разрешение споров
            </Title>
            <p>
              Все споры и разночтения, которые могут возникнуть из этих Условий, будут разрешаться путем переговоров.
              Переписка по электронной почте с адресом info@crypto-host.net считается эффективным и юридически
              обязывающим методом связи. Если стороны не смогут разрешить спор в течение 30 (тридцати) дней, он будет
              передан в компетентный суд.
            </p>
            <p>По любым вопросам и предложениям пишите на адрес info@crypto-host.net.</p>
          </div>
        </Section>
        <Section>
          <Subscribe />
        </Section>
      </Layout>
    </>
  );
};

export default Agreement;
