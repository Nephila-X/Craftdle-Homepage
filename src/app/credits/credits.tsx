import React, { JSX } from "react";
import craftdleTitle from "@/assets/imgs/craftdle_title.png"

export const revalidate = 0

interface Credit {
    credit?: string;
    members: Array<string | Credit>;
}

interface CreditGroup {
    title: string;
    credits: Credit[] | CreditGroup[];
}

interface CreditProps {
    credit: Credit;
}

function Credit(props: CreditProps) {
    return <p className={props.credit.credit ? "creditTextContainer" : "creditMessageContainer"}>
        {props.credit.credit ? <strong className="creditTitle">{props.credit.credit}</strong> : null}
        {" "}
        <span className="creditText">
            {typeof props.credit.members === "string"
                ? props.credit.members
                : props.credit.members.map((member, index) => (
                    <React.Fragment key={index}>
                        {index > 0 && <>, <br /></>}
                        {typeof member === "string" ? member : (member as Credit).credit}
                    </React.Fragment>
                ))
            }
        </span>
    </p>
}

interface CreditGroupProps {
    titleLevel?: number;
    credits: CreditGroup[];
}

function CreditGroup(props: CreditGroupProps) {
    const titleLevel = props.titleLevel ? props.titleLevel : 2;
    const titleName = `h${titleLevel > 6 ? 6 : titleLevel}` as keyof JSX.IntrinsicElements;
    return <>
        {props.credits.map((credit, index) => {
            if ("credits" in credit) {
                return (
                    <article
                        key={`group-${index}-${credit.title}`}
                        className="creditGroup"
                        style={{ marginTop: `${10 / (titleLevel - 1)}vmin` }}
                    >
                        {React.createElement(titleName, { className: 'title' }, credit.title)}
                        <CreditGroup titleLevel={titleLevel + 1} credits={credit.credits as CreditGroup[]} />
                    </article>
                );
            }

            if ("members" in credit) {
                return <Credit key={`credit-${index}-${(credit as Credit).credit ?? "noTitle"}`} credit={credit as Credit} />;
            }

            return null;
        })}
    </>
}

export default async function Credits() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/credits`, {
        cache: "no-store",
    });

    const data = await res.json();

    return (
        <main id="credits">
            <h1>
                <img id="creditsCraftdleTitle" src={craftdleTitle.src} alt="Craftdle Title" draggable={false} />
            </h1>
            <section>
                <CreditGroup credits={data.data} />
            </section>
        </main>
    );
}