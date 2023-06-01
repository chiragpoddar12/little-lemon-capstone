import TestinomialCard from "./TestinomialCard";

function Testinomials(){

    const testinomial = [{
        name: "Joe Morrisey",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam ut eros porta placerat"
    },{
        name: "John Doe",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam ut eros porta placerat"
    },{
        name: "Mike Slatery",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam ut eros porta placerat"
    },{
        name: "James O'brien",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam ut eros porta placerat"
    },{
        name: "Max Jones",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam ut eros porta placerat"
    },{
        name: "Darren Gough",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam ut eros porta placerat"
    },{
        name: "Mary Anne",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam ut eros porta placerat"
    }];

    return (
        <>
            <section className={"testinomials"}>
                <h1>Testimonials</h1>
                <section className={"testinomialCards"}>
                    {
                        testinomial.map((testimonial) =>
                        <TestinomialCard name={testimonial.name} comment={testimonial.comment}/>
                    )}
                </section>
            </section>
        </>
    );
}

export default Testinomials;