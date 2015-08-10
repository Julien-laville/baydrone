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

var filters = {
    power : {},
    kv : {},
    s : {},
    motor_size : {},
    tension : {},
    frequency : {},
    range : {}
};

var Craft = (function() {
    var currentRig = rigTypes.beginner;
    var domSlots = document.getElementById('slots');
    var domfilters = document.getElementById('filters');
    var domPartFilterContainer = document.getElementById('part_filter_container');
    return {
        component : {},
        toggleRigType : function(rigKey) {
            var rig = rigTypes[rigKey];
            domSlots.html = doT.template('dot/slots', rig);
        },
        selectSlot : function(slotKey) {
            var slot = slotSetups[slotKey];
            domPartFilterContainer.style.display = true;
            domfilters.html = doT.template('dot/filters', slot)
        },
        closeSlot : function() {
            domPartFilterContainer.style.display = false;
        },
        updateFilter : function(filterKey) {

        }
    };
})();

var Sim = (function() {
    return {
        refresh : function() {
            var simuData = {
                key : userKey,
                component : Craft.component
            };
            var simuPromise = promise.get('simu', simuData);
            simuPromise.then(function(error, data) {
                if(!error) {
                    //Hichart.new(data);
                } else {
                    alert('Error contacting simulator');
                }
            });
        }
    };
})();
