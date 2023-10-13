import './card.css'

export default function Card({ title, subtitle, text }) {
    return <div className="card">
        <h4> {title}</h4>
        <h6>{subtitle}</h6>
        <p>{text}</p>
    </div>
}