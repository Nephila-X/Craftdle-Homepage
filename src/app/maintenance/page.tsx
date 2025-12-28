import craftdleTitle from "@/assets/imgs/craftdle_title.png"

export default function Maintenance() {
    return (
        <section id="maintenance">
            <div id="maintenanceMessage">
                <img id="craftdleMaintenanceTitle" src={craftdleTitle.src} alt="craftdle title" draggable={false} />
                <h1 id="maintenanceTitle">Maintenance</h1>
                <p>Craftdle is currently undergoing scheduled maintenance. We apologize for any inconvenience and appreciate your patience. Don&apos;t worry—your streak has been frozen during the maintenance!</p>
                <p>Thank you,<br />The NephilaX Team</p>
                <p>Estimated End of Maintenance:<span id="maintenanceCountdown">
                    To be determined
                </span></p>
            </div>
        </section>
    )
}