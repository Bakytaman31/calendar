import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="full_page">
		<div className="center">
			<h1>Ошибка 404 - страница не найдена!</h1>
			<p>Страница которую вы запрашиваете, не существует. Возможно она устарела, была удалена, или был введен неверный адрес в адресной строке.</p>
			<Link to="/" relative="path">Вернуться на главную</Link>
		</div>
	</div>
  )
}
