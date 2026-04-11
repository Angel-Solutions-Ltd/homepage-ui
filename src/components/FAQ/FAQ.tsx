import { COPY } from '../../copy';
import './FAQ.css';

interface P {}

export const FAQ = ({}: P) => {
    return (
        <div className="faq-page content-page">
            <div className="faq-header">
                <h1 className="faq-title">{COPY.faq.title}</h1>
                <p className="faq-intro">{COPY.faq.intro}</p>
            </div>
            {/* TODO: Add a "Schedule a Free Consultation" button here that opens a calendar booking flow.
                Options to consider:
                - Embed a Calendly / Cal.com widget (easiest, no backend needed)
                - Build a custom booking form that sends an email notification
                - Link to a dedicated /book route with an embedded scheduler
                The button should appear just below the intro text and above the FAQ list,
                styled similarly to the home-cta but perhaps slightly smaller. */}
            <div className="faq-list">
                {COPY.faq.items.map(({ q, a }) => (
                    <div key={q} className="faq-item">
                        <span className="faq-q">{q}</span>
                        <p className="faq-a">{a}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
