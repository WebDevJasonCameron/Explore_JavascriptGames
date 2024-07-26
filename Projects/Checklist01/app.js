// app.js
document.addEventListener('DOMContentLoaded', () => {
    const newModuleInput = document.getElementById('new-module');
    const addModuleButton = document.getElementById('add-module');
    const modulesContainer = document.getElementById('modules');

    // Load saved modules from localStorage
    loadModules();

    // Add new module
    addModuleButton.addEventListener('click', () => {
        addModule(newModuleInput.value);
        newModuleInput.value = '';
    });

    function addModule(moduleTitle, top = 0, left = 0) {
        if (moduleTitle.trim() !== '') {
            const module = document.createElement('div');
            module.className = 'module';
            module.style.top = top + 'px';
            module.style.left = left + 'px';

            const moduleHeader = document.createElement('div');
            moduleHeader.className = 'module-header';

            const title = document.createElement('h2');
            title.textContent = moduleTitle;

            const addSubModuleButton = document.createElement('button');
            addSubModuleButton.textContent = 'Add Sub-Module';
            addSubModuleButton.addEventListener('click', () => {
                addSubModule(module);
            });

            const removeModuleButton = document.createElement('button');
            removeModuleButton.textContent = 'Remove Module';
            removeModuleButton.className = 'remove-button';
            removeModuleButton.addEventListener('click', () => {
                module.remove();
                saveModules();
            });

            moduleHeader.appendChild(title);
            moduleHeader.appendChild(addSubModuleButton);
            moduleHeader.appendChild(removeModuleButton);
            module.appendChild(moduleHeader);

            const moduleContent = document.createElement('div');
            moduleContent.className = 'module-content';
            module.appendChild(moduleContent);

            modulesContainer.appendChild(module);

            // Make the module draggable
            makeDraggable(module);

            saveModules();
        }
    }

    function addSubModule(module) {
        const subModule = document.createElement('div');
        subModule.className = 'sub-module';

        const subModuleTypeSelect = document.createElement('select');
        const option1 = document.createElement('option');
        option1.value = 'checklist';
        option1.textContent = 'Checklist Item';
        const option2 = document.createElement('option');
        option2.value = 'text';
        option2.textContent = 'Text Input';
        subModuleTypeSelect.appendChild(option1);
        subModuleTypeSelect.appendChild(option2);

        const subModuleInput = document.createElement('input');
        subModuleInput.type = 'text';
        subModuleInput.placeholder = 'Enter item or text';

        const subModuleCheckbox = document.createElement('input');
        subModuleCheckbox.type = 'checkbox';
        subModuleCheckbox.style.display = 'none';

        subModuleTypeSelect.addEventListener('change', () => {
            if (subModuleTypeSelect.value === 'checklist') {
                subModuleCheckbox.style.display = 'inline';
            } else {
                subModuleCheckbox.style.display = 'none';
            }
        });

        const removeSubModuleButton = document.createElement('button');
        removeSubModuleButton.textContent = 'Remove';
        removeSubModuleButton.className = 'remove-button';
        removeSubModuleButton.addEventListener('click', () => {
            subModule.remove();
            saveModules();
        });

        subModule.appendChild(subModuleTypeSelect);
        subModule.appendChild(subModuleInput);
        subModule.appendChild(subModuleCheckbox);
        subModule.appendChild(removeSubModuleButton);

        module.querySelector('.module-content').appendChild(subModule);

        saveModules();
    }

    function saveModules() {
        const modules = [];
        modulesContainer.querySelectorAll('.module').forEach(module => {
            const moduleTitle = module.querySelector('h2').textContent;
            const subModules = [];
            module.querySelectorAll('.sub-module').forEach(subModule => {
                const subModuleType = subModule.querySelector('select').value;
                const subModuleInput = subModule.querySelector('input[type="text"]').value;
                const subModuleChecked = subModule.querySelector('input[type="checkbox"]').checked;
                subModules.push({
                    type: subModuleType,
                    text: subModuleInput,
                    checked: subModuleChecked
                });
            });
            const top = parseInt(module.style.top, 10);
            const left = parseInt(module.style.left, 10);
            modules.push({
                title: moduleTitle,
                subModules: subModules,
                top: top,
                left: left
            });
        });
        localStorage.setItem('modules', JSON.stringify(modules));
    }

    function loadModules() {
        const savedModules = JSON.parse(localStorage.getItem('modules'));
        if (savedModules) {
            savedModules.forEach(module => {
                addModule(module.title, module.top, module.left);
                const lastModule = modulesContainer.lastChild;
                module.subModules.forEach(subModule => {
                    addSubModule(lastModule);
                    const lastSubModule = lastModule.querySelector('.module-content').lastChild;
                    lastSubModule.querySelector('select').value = subModule.type;
                    lastSubModule.querySelector('input[type="text"]').value = subModule.text;
                    lastSubModule.querySelector('input[type="checkbox"]').checked = subModule.checked;
                    if (subModule.type === 'checklist') {
                        lastSubModule.querySelector('input[type="checkbox"]').style.display = 'inline';
                    }
                });
            });
        }
    }

    function makeDraggable(element) {
        let isDragging = false;
        let offsetX, offsetY;

        element.addEventListener('mousedown', (e) => {
            isDragging = true;
            offsetX = e.offsetX;
            offsetY = e.offsetY;
            element.style.zIndex = 1000; // Ensure the element is on top during dragging
        });

        document.addEventListener('mousemove', (e) => {
            if (isDragging) {
                element.style.top = (e.clientY - offsetY) + 'px';
                element.style.left = (e.clientX - offsetX) + 'px';
            }
        });

        document.addEventListener('mouseup', () => {
            if (isDragging) {
                isDragging = false;
                element.style.zIndex = ''; // Reset zIndex
                saveModules();
            }
        });
    }
});