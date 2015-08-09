var rigTypes = {
    racer : {
        name : 'Racer',
        slots : {
            power : '4-6',
            gps : 0,
            frame : 1,
            gimbals : 1,
            fpvCamera : 1,
            rx : 1,
            vtx : 1
        }
    },
    beginner : {
        name : 'Beginner',
        slots : {
            power : 4,
            gps : 0,
            frame : 1,
            gimbals : 1,
            fpvCamera : 1,
            rx : 1,
            vtx : 1
        }
    },
    heavyLift : {
        name : 'Heavy Lift',
        slots : {
            power : '4-8',
            gps : 2,
            frame : 1,
            gimbals : 1,
            fpvCamera : 1,
            rx : 1,
            vtx : 1
        }
    }
};

var slotSetups = {
    motor : {
        filters : ['power', 'kv', 's', 'motor_size']
    },
    esc : {
        filters : ['power', 'tension']
    },
    camera : {
        filters : ['line_count']
    },
    vtx : {
        filters : ['frequency', 'power', 'range']
    },
    tx : {
        filters : ['frequency', 'power', 'range']
    }
};

var Craft = (function() {
    var currentRig = rigTypes.beginner;
    var domSlots = document.getElementById('slots');
    var domfilters = document.getElementById('filters');
    return {
        toggleRigType : function(rig) {
            domSlots.html = doT.template('dot/slots', rig);
        },
        selectSlot : function(slot) {
            domfilters.html = doT.template('dot/filters', slot)
        }
    }
})();
