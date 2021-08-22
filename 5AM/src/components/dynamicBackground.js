import React from 'react';

//导入动态背景库
import ParticlesBg from 'particles-bg';

class DynamicBackground extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "React"
        };
    }

    render() {
        let config = {
            num: [1, 5],
            rps: 0.1,
            radius: [5, 40],
            life: [1.5, 3],
            v: [2, 3],
            tha: [-40, 40],
            alpha: [0.6, 0],
            scale: [.1, 0.4],
            position: "all",
            color: ["random", "#ff0000"],
            cross: "dead",
            random: 15
        };

        if (Math.random() > 0.85) {
            config = Object.assign(config, {
                onParticleUpdate: (ctx, particle) => {
                    ctx.beginPath();
                    ctx.rect(
                        particle.p.x,
                        particle.p.y,
                        particle.radius * 2,
                        particle.radius * 2
                    );
                    ctx.fillStyle = particle.color;
                    ctx.fill();
                    ctx.closePath();
                }
            });
        }

        return (
            <ParticlesBg type="custom" config={config} bg={true} />
        );
    }
}

export default DynamicBackground